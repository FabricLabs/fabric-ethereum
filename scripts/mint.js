'use strict';

const Node = require('@fabric/core/types/node');

const Mint = require('../services/mint');
const settings = require('../settings/local');

async function main (input = {}) {
  const node = new Node({
    service: Mint,
    settings: input
  });

  node.on('log', function (msg) {
    console.log('[SCRIPTS:MINT]', 'Log:', msg);
  });

  await node.start();

  return {
    id: node.id
  };
}

main(settings).catch((exception) => {
  console.error('[SCRIPTS:MINT]', 'Main Process Exception:', exception);
}).then((output) => {
  console.log('[SCRIPTS:MINT]', 'Process Ready:', output);
});
