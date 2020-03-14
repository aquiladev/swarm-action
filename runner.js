const core = require('@actions/core');
const github = require('@actions/github');

const uploader = require('./uploader');

async function run() {
  try {
    const path = core.getInput('path');
    const swarmUrl = core.getInput('swarmUrl');
    const defaultPath = core.getInput('defaultPath');
    const verbose = (core.getInput('verbose') === 'true');

    const options = { path, swarmUrl, defaultPath, verbose };
    const hash = await uploader.upload(options).catch((err) => { throw err; });
    core.setOutput('hash', hash);

    if (verbose) {
      // Get the JSON webhook payload for the event that triggered the workflow
      const payload = JSON.stringify(github.context.payload, undefined, 2);
      console.log(`The event payload: ${payload}`);
    }

    console.log('Upload to Swarm finished successfully', hash);
  } catch (error) {
    core.setFailed(error.message);
    throw error;
  }
}

module.exports = run;