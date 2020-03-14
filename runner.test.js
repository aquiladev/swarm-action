const run = require('./runner');

jest.setTimeout(240000);

describe.skip('index: Integration test', () => {
  it('should upload data dir', async () => {
    process.env['INPUT_PATH'] = './data';
    process.env['INPUT_SWARMURL'] = 'https://swarm-gateways.net';
    process.env['INPUT_DEFAULTPATH'] = 'index.html';
    process.env['INPUT_VERBOSE'] = true;
    await run();
  });

  it('should upload real dapp dir', async () => {
    process.env['INPUT_PATH'] = 'C:/Users/SergiiBomko/Documents/GitHub/ddns-dapp/build';
    process.env['INPUT_SWARMURL'] = 'https://swarm-gateways.net';
    process.env['INPUT_DEFAULTPATH'] = 'index.html';
    process.env['INPUT_VERBOSE'] = false;
    await run();
  });
});