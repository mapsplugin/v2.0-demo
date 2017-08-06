/**
 * Just add this script as `after_build` and `after_prepare` hook in config.xml for ios platform.
 */

const { join } = require('path')
const fs = require('fs')

// TODO: Remove this after https://issues.apache.org/jira/browse/CB-11311 is fixed
module.exports = function(ctx) {
  if (!ctx.opts.browserify) {
    return
  }

  const pathToCordova = join(ctx.opts.projectRoot, 'platforms', 'ios', 'www', 'cordova.js')
  const content = fs.readFileSync(pathToCordova, 'utf8')

  if (content.indexOf('"cordova/exec.o"') !== -1) {
    console.info('skip browserify patch because file is already patched')
    return
  }

  const newContent = content.replace(/"cordova\/exec":\[function/, `
    "cordova/exec":[function(require,module){
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.cordova && window.webkit.messageHandlers.cordova.postMessage) {
          module.exports = require("cordova-plugin-wkwebview-engine.ios-wkwebview-exec");
        } else {
          module.exports = require("cordova/exec.o");
        }
    },{"cordova/exec.o":"cordova/exec.o", "cordova-plugin-wkwebview-engine.ios-wkwebview-exec":"cordova-plugin-wkwebview-engine.ios-wkwebview-exec"}],
    "cordova/exec.o":[function`)
    .replace(/(module\.exports\s*=\s*[^;]+;\s*)if\s*\(window\.webkit && window\.webkit\.messageHandlers &&/, '$1/* disabled by hook */ if (0 && window.webkit && window.webkit.messageHandlers &&')

  fs.writeFileSync(pathToCordova, newContent, 'utf8')
  console.info('patched browserified build. Fix exec override for iOS WKWebView')
}