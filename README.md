# cordova-google-maps v2.0 example

This is an example of the multiple_maps branch.

### Buy me a beer

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=SQPLZJ672HJ9N&lc=US&item_name=cordova%2dgooglemaps%2dplugin&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)



# Demo apk

You can try the demo apk that is built of this repository.

[Click to download the demo apk (Android)](https://dl.dropboxusercontent.com/u/1456061/cordova-google-maps/v2/cordova-googlemaps-v2-demo_01.apk)

https://www.youtube.com/watch?v=oZBkTIpjTqg

<a href="https://www.youtube.com/watch?v=oZBkTIpjTqg"><img src="https://cloud.githubusercontent.com/assets/167831/19011215/3f29e648-8744-11e6-9bf3-51d046885916.png"></a>

----

## Build the demo app

In order to use this demo, please follow the below commands:

```
$> git clone https://github.com/mapsplugin/v2.0-demo

$> cd v2.0-demo

```

Open the config.xml file, then replace [(REPLACE_WITH_YOUR_KEY)](https://github.com/mapsplugin/v2.0-demo/blob/master/config.xml#L35-L36) with your API keys.

After that, you can restore the project files.

```
$> cordova prepare

// Corfirm

$> cordova platform list
Installed platforms:
  android 5.2.2
  ios 4.2.1

$> cordova plugin list
com.googlemaps.ios 2.0.1 "Google Maps SDK for iOS"
cordova-plugin-console 1.0.4 "Console"
cordova-plugin-googlemaps 2.0.0-beta "cordova-plugin-googlemaps"
cordova-plugin-whitelist 1.2.2 "Whitelist"
cordova-plugin-wkwebview-engine 1.1.0 "Cordova WKWebView Engine"
```
----

## Update the plugin code

Since the plugin code is updated without announcement for small code,
I recommend you use the latest code of the plugin.

To update the plugin, just reinstall the plugin.

```
$> cordova rm cordova-plugin-googlemaps  # remove the plugin

$> cordova prepare  # reinstall the latest plugin automatically.

```

----

## Documentations

The documents are below.

https://github.com/mapsplugin/cordova-plugin-googlemaps/wiki/v2-beta

----
## issues

If you face any issues about v2.0-beta, please post to the [issue tracker of the demo app](https://github.com/mapsplugin/v2.0-demo/issues)
