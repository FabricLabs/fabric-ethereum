'use strict';

const Ethereum = require('../services/ethereum');
const settings = require('../settings/local');

async function main (input = {}) {
  const ethereum = new Ethereum(input);

  ethereum.on('log', function (msg) {
    console.log('[ETHEREUM]', 'Log:', msg);
  });

  ethereum.on('beat', function (beat) {
    console.log('[ETHEREUM]', 'Beat:', beat);
    console.log('[ETHEREUM]', 'Latest State:', beat.value.data.state);
  });

  await ethereum.start();

  return {
    id: ethereum.id
  };
}

main(settings).catch((exception) => {
  console.error('[ETHEREUM]', 'Main Process Exception:', exception);
}).then((output) => {
  console.log('[ETHEREUM]', 'Process Ready:', output);
});
