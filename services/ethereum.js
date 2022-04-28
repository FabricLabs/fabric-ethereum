'use strict';

// Dependencies
const BN = require('bn.js');
const jayson = require('jayson');

// Fabric Types
const Actor = require('@fabric/core/types/actor');
const Service = require('@fabric/core/types/service');
const Message = require('@fabric/core/types/message');
// const Transition = require('@fabric/core/types/transition');

// Ethereum
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
      ETHID: 1,
      hosts: [],
      stack: [],
      servers: ['http://127.0.0.1:8545'],
      interval: 15000,
      targets: []
    }, this.settings, settings);

    // Internal Properties
    this.rpc = null;
    this.vm = new VM();

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
      clearInterval(this.heartbeat);
      delete this.heartbeat;
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
      service.heartbeat = setInterval(service.tick.bind(service), service.settings.interval);
    }

    service.vm.on('step', service._handleVMStep.bind(service));
    service.status = 'started';

    service.emit('log', 'Service started!');
    service.emit('ready', { id: service.id });

    this._checkAllTargetBalances();

    return this;
  }

  async _RPCErrorHandler (error) {
    this.emit('error', `[RPC] Error: ${error}`);
  }
}

module.exports = Ethereum;
