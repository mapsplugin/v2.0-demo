# cordova-google-maps v2.0 example

This is an example of the multiple_maps branch.

### Buy me a beer

I have been spend tons of time for this plugin project, but even though the plugin is still free.

I appreciate if you donate some amount to help this project from this button.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=SQPLZJ672HJ9N&lc=US&item_name=cordova%2dgooglemaps%2dplugin&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)

The donated amount is used for buying testing machine (such as iPhone, Android) or new software.

# Demo apk

You can try all features of this plugin.

[Click to download the demo apk (Android)](https://github.com/mapsplugin/v2.0-demo/blob/master/cordova-googlemaps-v2-demo_35.apk?raw=true)

## How to install the apk file.

After download the apk file from the above link, install it to your android.

```bash
$> adb uninstall cordova.google.maps  // if you installed this app before.

$> adb install cordova-googlemaps-v2-demo_35.apk
```

![](image.gif)

----

## How to build the demo app

In order to use this demo, please follow the below commands:

```
$> git clone https://github.com/mapsplugin/v2.0-demo

$> cd v2.0-demo

// Install the maps plugin

$> cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="..." --variable API_KEY_FOR_IOS="..."
```

----

## Documentations

The documents are below.

https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/README.md
