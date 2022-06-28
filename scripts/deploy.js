'use strict';

const fs = require('fs');
const Node = require('@fabric/core/types/node');

const Mint = require('../services/mint');
const settings = require('../settings/local');

async function main (input = {}) {
  const node = new Node({
    service: Mint,
    settings: input
  });

  node.on('log', function (msg) {
    console.log('[SCRIPTS:DEPLOY]', 'Log:', msg);
  });

  await node.start();

  const contracts = await _listContracts();
  console.log('contracts:', contracts);

  for (let i = 0; i <= contracts.length; i++) {
    const contract = contracts[i];
    const content = fs.readFileSync(`./contracts/${contract}`);
    node._call('deploy', [content]);
  }

  return {
    id: node.id
  };
}

async function _listContracts () {
  const files = fs.readdirSync('./contracts');
  const solidities = files.filter(f => {
    return (f.split('.')[1] === 'sol');
  });

  const contracts = [].concat(solidities);
  return contracts;
}

main(settings).catch((exception) => {
  console.error('[SCRIPTS:DEPLOY]', 'Main Process Exception:', exception);
}).then((output) => {
  console.log('[SCRIPTS:DEPLOY]', 'Process Ready:', output);
});
