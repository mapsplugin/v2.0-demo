module.exports = function(context) {
  if (context.opts.cordova.platforms.indexOf('ios') === -1) {
    return;
  }
  var request = require('request');
  var fs = require('fs');
  var targz = require('targz');

  var Q = context.requireCordovaModule('q');
    var defer = Q.defer();
    console.log("---> Downloading the Google Maps SDK for iOS v2.0.1 ...");

    var url = "https://www.gstatic.com/cpdc/5a212b0fa429156f-GoogleMaps-2.0.1.tar.gz";
    request.get(url)
    .on('error', function(error) {
      defer.reject(error);
    })
    .on('end', function() {
      console.log("---> The SDK is downloaded.");

      targz.decompress({
        src: __dirname + "/../GoogleMaps.tar.gz",
        dest: __dirname + "/../"
      }, function(error) {
        if (error) {
          defer.reject(error);
          return;
        }
        fs.unlink(__dirname + "/../GoogleMaps.tar.gz", function() {
          defer.resolve();
        });
      });
    })
    .pipe(fs.createWriteStream(__dirname + "/../GoogleMaps.tar.gz"));

    return defer.promise;
};
