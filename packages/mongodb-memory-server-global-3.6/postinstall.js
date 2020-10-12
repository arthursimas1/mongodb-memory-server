/* eslint @typescript-eslint/no-var-requires: 0 */

function doesModuleExist(name) {
  try {
    return !!require.resolve(name);
  } catch (e) {
    return false;
  }
}

const modulePath = '../mongodb-memory-server-core/lib/util/postinstall-helper';

if (!doesModuleExist(modulePath)) {
  console.log('Could not find file "postinstall" in core package!');
  return;
}

require(modulePath).postInstall(require('./package.json').mongodb_version);
