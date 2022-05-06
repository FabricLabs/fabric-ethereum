'use strict';

// Dependencies
const BN = require('bn.js');
const jayson = require('jayson');

// Fabric Types
const Actor = require('@fabric/core/types/actor');
const Service = require('@fabric/core/types/service');
const Message = require('@fabric/core/types/message');
// const Transition = require('@fabric/core/types/transition');
const HTTPServer = require('@fabric/http/types/server');

// Ethereum
const Web3 = require('web3');
const VM = require('@ethereumjs/vm').default;
// const Account = require('@ethereumjs/account').default;
// const Blockchain = require('@ethereumjs/blockchain').default;
// const Block = require('@ethereumjs/block').default;

const Opcodes = {
  STOP: '00',
  ADD: '01',
  PUSH1: '60'
};

class Ethereum extends Service {
  constructor (settings = {}) {
    super(settings);

    this.settings = Object.assign({
      name: '@services/ethereum',
      mode: 'rpc',
      network: 'main',
      http: null,
      ETHID: 1,
      hosts: [],
      stack: [],
      servers: ['http://127.0.0.1:8545'],
      interval: 12500,
      targets: []
    }, this.settings, settings);

    // Internal Properties
    this.rpc = null;
    this.vm = new VM();
    this.http = new HTTPServer(this.settings.http);
    this.web3 = new Web3(this.settings.servers[0]);

    // Internal State
    this._state = {
      status: 'STOPPED',
      stack: this.settings.stack,
      accounts: {},
      tip: null,
      height: null
    };

    // Chainable
    return this;
  }

  set tip (value) {
    if (this._state.tip !== value) {
      this.emit('block', Message.fromVector(['EthereumBlock', value]));
      this._state.tip = value;
    }
  }

  set height (value) {
    this._state.height = value;
  }

  get tip () {
    return this._state.tip;
  }

  get height () {
    return this._state.height;
  }

  async _test () {
    let program = [
      Opcodes.PUSH1,
      '03',
      Opcodes.PUSH1,
      '05',
      Opcodes.ADD, 
      Opcodes.STOP
    ];

    return this.execute(program);
  }

  async _handleVMStep (step) {
    // let transition = Transition.between(this._state.stack, step.stack);
    this._state.stack = step.stack;
  }

  async deploy (input) {
    const abi = Buffer.alloc(4096); // TODO: compile solidity (input)
    const address = await this.getReceiveAddress();
    const contract = new this.web3.eth.Contract(abi, address, {
      gasPrice: 1500000
    });

    const deployed = await contract.deploy();
    const sent = await deployed.send({
      gas: 1500000,
      gasPrice: 30000000000000
    });

    return {
      deployed: deployed,
      sent: sent
    };
  }

  async execute (program) {
    if (!(program instanceof Array)) throw new Error('Cannot process program unless it is an Array.');
    return this.vm.runCode({
      code: Buffer.from(program.join(''), 'hex'),
      gasLimit: new BN(0xffff),
    }).then(results => {
      console.log('Returned : ' + results.returnValue.toString('hex'));
      console.log('Gas used : ' + results.gasUsed.toString());
    }).catch(err => console.log('Error    : ' + err));
  }

  async getReceiveAddress () {

  }

  async _executeRPCRequest (name, params = []) {
    const start = Date.now();
    const service = this;
    const actor = new Actor({
      type: 'GenericRPCRequest',
      method: name,
      params: params,
      status: 'queued'
    });

    const promise = new Promise((resolve, reject) => {
      try {
        service.rpc.request(name, params, function (err, response) {
          const finish = Date.now();
          const duration = finish - start;
          if (err) {
            actor.status = 'error';
            service.emit('error', Message.fromVector(['GenericServiceError', err]));
            reject(new Error(`Could not call: ${err}`));
          } else {
            actor.status = 'completed';
            resolve({
              request: actor,
              duration: duration,
              result: response.result
            });
          }
        });
      } catch (exception) {
        reject(new Error(`Request exception: ${exception}`));
      }
    });
    return promise;
  }

  async _checkAllTargetBalances () {
    for (let i = 0; i < this.settings.targets.length; i++) {
      this._getBalanceForAddress(this.settings.targets[i]);
    }
  }

  async _getBalanceForAddress (address) {
    const service = this;
    const request = service._executeRPCRequest('eth_getBalance', [address]);

    request.then((response) => {
      if (!response || !response.result) return;
      service._state.accounts[address] = { balance: response.result };
    });

    return request;
  }

  async _checkRPCBlockNumber () {
    const service = this;
    const request = service._executeRPCRequest('eth_blockNumber');

    request.then((response) => {
      service.height = Buffer.from(response.result.toString(), 'hex').toString(10);
    });

    return request;
  }

  async _handleHTTPServerLog (msg) {
    this.emit('log', `HTTP Server emitted log event: ${msg}`);
  }

  async generateBlock () {
    return null;
  }

  async tick () {
    const now = (new Date()).toISOString();
    ++this.clock;

    await this._checkRPCBlockNumber();
    await this._checkAllTargetBalances();

    const beat = Message.fromVector(['Generic', {
      clock: this.clock,
      created: now,
      state: this._state
    }]);

    this.emit('beat', beat);
  }

  async stop () {
    this.status = 'stopping';
    // await this.vm.destroy();

    if (this.settings.mode === 'rpc') {
      clearInterval(this._beat);
      delete this._beat;
    }

    this.status = 'stopped';
  }

  async start () {
    const service = this;
    let secure = false;

    // Assign Status
    service.status = 'starting';

    // Local Variables
    let client = null;

    if (service.settings.mode === 'rpc') {
      const providers = service.settings.servers.map(x => new URL(x));
      // TODO: loop through all providers
      const provider = providers[0];

      if (provider.protocol === 'https:') secure = true;
      const config = {
        username: provider.username,
        password: provider.password,
        host: provider.hostname,
        port: provider.port
      };

      if (secure) {
        client = jayson.client.https(config);
      } else {
        client = jayson.client.http(config);
      }

      // Link generated client to `rpc` property
      service.rpc = client;

      // Assign Heartbeat
      service._beat = setInterval(service.tick.bind(service), service.settings.interval);
    }

    service.vm.on('step', service._handleVMStep.bind(service));

    if (this.settings.http) {
      this.http.on('log', this._handleHTTPServerLog.bind(this));
      await this.http.start();
    }

    await this._syncWithRPC();

    service.status = 'started';

    service.emit('log', 'Service started!');
    service.emit('ready', { id: service.id });

    this._checkAllTargetBalances();

    return this;
  }

  async _getBlockByNumber (number) {
    return this._makeRPCRequest('eth_getBlockByNumber', [number]);
  }

  async _getChainHeight () {
    return this._makeRPCRequest('eth_blockNumber');
  }

  async _makeRPCRequest (method, params = []) {
    const self = this;
    return new Promise((resolve, reject) => {
      if (!self.rpc) return reject(new Error('RPC manager does not exist.'));
      try {
        self.rpc.request(method, params, function (err, response) {
          if (err) {
            // TODO: replace with reject()
            return resolve({
              error: (err.error) ? JSON.parse(JSON.parse(err.error)) : err,
              response: response
            });
          }

          return resolve(response.result);
        });
      } catch (exception) {
        return reject(exception);
      }
    });
  }

  async _RPCErrorHandler (error) {
    this.emit('error', `[RPC] Error: ${error}`);
  }

  async _syncWithRPC () {
    const height = await this._getChainHeight();
    const best = await this._getBlockByNumber(height);
    return this;
  }
}

module.exports = Ethereum;
