'use strict';

// Fabric Types
const Actor = require('@fabric/core/types/actor');
const Key = require('@fabric/core/types/key');
const Service = require('@fabric/core/types/service');

// Fabric HTTP
const HTTPServer = require('@fabric/http/types/server');

// Internal Services
const Ethereum = require('./ethereum');

/**
 * Example contract to self-issue assets.
 */
class Mint extends Service {
  /**
   * Implements a simple self-issuance contract.
   * @param {Object} settings Settings.
   * @returns 
   */
  constructor (settings = {}) {
    super(settings);

    this.settings = Object.assign({
      supply: 1
    }, settings);

    this.hdkey = new Key();
    this.ethereum = new Ethereum(this.settings);
    this.http = new HTTPServer(this.settings.http);

    this._state = {
      content: {
        supply: 0
      }
    };

    return this;
  }

  async issue (amount = 1) {
    const now = (new Date()).toISOString();
    const contract = {
      amount: amount,
      created: now,
      owner: this.hdkey.pubkey
    };

    const actor = new Actor(contract);

    this._state.content.supply += amount;
    this.commit();

    this.emit('issuance', actor);

    return {
      contract: contract
    };
  }

  async start () {
    this.ethereum.on('log', this._handleEthereumLog.bind(this));
    this.ethereum.on('beat', this._handleEthereumBeat.bind(this));


    this.http.on('log', this._handleHTTPLog.bind(this));

    await this.http.start();
    await this.ethereum.start();

    return this;
  }

  async _handleEthereumLog (msg) {
    this.emit('log', `[ETHEREUM] Log: ${msg}`);
  }

  async _handleEthereumBeat (beat) {
    this.emit('log', `[ETHEREUM] Beat: ${JSON.stringify(beat, null, '  ')}`);
    this.emit('log', `[ETHEREUM] Latest State: ${JSON.stringify(beat['@data'].data.state)}`);
  }

  async _handleHTTPLog (msg) {
    this.emit('log', `[HTTP] Log: ${msg}`);
  }
}

module.exports = Mint;
