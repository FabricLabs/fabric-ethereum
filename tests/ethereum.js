'use strict';

const assert = require('assert');
// const Wallet = require('@fabric/core/types/wallet');
const Ethereum = require('../services/ethereum');

const settings = require('../settings/test');
const options = Object.assign({}, settings, {
  network: 'regtest',
  fullnode: true,
  verbosity: 2
});

describe('@fabric/core/services/ethereum', function () {
  describe('Ethereum', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Ethereum instanceof Function, true);
    });

    it('can start and stop smoothly', async function () {
      async function test () {
        const ethereum = new Ethereum(options);

        try {
          await ethereum.start();
        } catch (exception) {
          console.error('Could not start ethereum:', exception);
        }

        try {
          await ethereum.stop();
        } catch (exception) {
          console.error('Could not start ethereum:', exception);
        }

        assert.ok(ethereum);
        assert.equal(ethereum.tip, '06226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f');
      }

      await test();
    });

    it('can generate a block', async function () {
      async function test () {
        const ethereum = new Ethereum(options);
        let block = null;

        try {
          await ethereum.start();
        } catch (exception) {
          console.error('Could not start ethereum:', exception);
        }

        try {
          block = await ethereum.generateBlock();
        } catch (exception) {
          console.error('Could not generate block:', exception);
        }

        try {
          await ethereum.stop();
        } catch (exception) {
          console.error('Could not start ethereum:', exception);
        }

        assert.ok(ethereum);
        assert.ok(block);

        assert.equal(ethereum.tip, block.hash('hex'));
        assert.equal(ethereum.height, 1);
      }

      await test();
    });
  });
});
