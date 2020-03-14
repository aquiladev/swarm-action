const { BzzNode: Bzz } = require('@erebos/bzz-node');
const { BzzFS } = require('@erebos/bzz-fs');

function upload(options) {
  const { path, swarmUrl, defaultPath } = options;

  if (!path) {
    throw new Error('Path is empty');
  }

  const bzz = new Bzz({ url: swarmUrl });
  const bzzFS = new BzzFS({ bzz })
  return bzzFS.uploadFrom(path, { defaultPath });
}

module.exports = { upload }