# cordova-google-maps v2.3.0 example

This is example application of [cordova-plugin-googlemaps v2.3.0](https://github.com/mapsplugin/cordova-plugin-googlemaps/).

## What the big change has been occurred at v2.3.0?

### MAP_READY
From the cordova-plugin-googlemaps version 2.3.0, you can omit the `MAP_READY` event listener.

**v2.0-v2.2.9 (old code syntax)**
```
var map = plugin.google.map.Map.getMap(mapDiv);
map.addEventListener(plugin.google.maps.event.MAP_READY, funciton() {
  map.setMapTypeId(plugin.google.maps.MapTypeId.HYBRID);
});
```

**from v2.3.0 (new code syntax)**
```
var map = plugin.google.map.Map.getMap(mapDiv);
map.setMapTypeId(plugin.google.maps.MapTypeId.HYBRID);
```

### Simplified `map.addXXX()` methods

From the v2.3.0, you can also omit the second arguments of `map.addXXX()` methods.

**v2.0-v2.2.9 (old code syntax)**
```
var map = plugin.google.map.Map.getMap(mapDiv);
map.addEventListener(plugin.google.maps.event.MAP_READY, funciton() {
  map.addMarker({
    position: {
      lat: 0, lng: 0
    }
  }, function(marker) {
    marker.showInfoWindow();
  });
});
```

**from v2.3.0 (new code syntax)**
```
var map = plugin.google.map.Map.getMap(mapDiv);
var marker = map.addMarker({
  position: {
    lat: 0, lng: 0
  }
});
marker.showInfoWindow();
```

You can still write with the old code syntax.

-----
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
