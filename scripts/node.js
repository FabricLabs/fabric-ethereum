'use strict';

const input = require('../settings/local');
const Ethereum = require('../services/ethereum');

async function main (settings = {}) {
  const ethereum = new Ethereum(settings);

  ethereum.on('log', function (msg) {
    console.log('[ETHEREUM]', 'Log:', msg);
  });

  ethereum.on('beat', function (beat) {
    console.log('[ETHEREUM]', 'Beat:', beat);
    console.log('[ETHEREUM]', 'Latest State:', beat['@data'].data.state);
  });

  return ethereum.start();
}

main(input).catch((exception) => {
  console.error('[ETHEREUM]', 'Main Process Exception:', exception);
}).then((output) => {
  console.log('[ETHEREUM]', 'Process Ready:', output);
});
