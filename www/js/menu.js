var pageTree = [
  {"href": "../index.html", "title": "Top"},
  {"title": "-------------"},
  {"title": "Classes"},
  {"href": "../Map/index.html", "title": "Map"},
  {"href": "../Marker/index.html", "title": "Marker"},
  {"href": "../HtmlInfoWindow/index.html", "title": "HtmlInfoWindow"},
  {"href": "../Polyline/index.html", "title": "Polyline"},
  {"href": "../Polygon/index.html", "title": "Polygon"},
  {"href": "../Circle/index.html", "title": "Circle"},
  {"href": "../TileOverlay/index.html", "title": "TileOverlay"},
  {"href": "../GroundOverlay/index.html", "title": "GroundOverlay"},
  //{"href": "../KmlOverlay/index.html", "title": "KmlOverlay"},
  {"href": "../Environment/index.html", "title": "Environment"},
  {"href": "../Geocoder/index.html", "title": "Geocoder"},
  {"href": "../BaseClass/index.html", "title": "BaseClass"},
  {"href": "../BaseArrayClass/index.html", "title": "BaseArrayClass"}/*,
  {"title": "-------------"},
  {"href": "../Demo/index.html", "title": "Demo"}
*/
];
window.addEventListener('load', function() {
  var contentView = document.getElementById("contentView");
  var headerDiv = document.getElementById("header");
  var menuUl = document.getElementById("menu");
  var menuView = document.getElementById("menuView");

  pageTree.forEach(function(menu) {
    var li = document.createElement("li");
    if (menu.href) {
      var anchor = document.createElement("A");
      anchor.setAttribute("href", menu.href);
      anchor.innerText = menu.title;
      li.appendChild(anchor);
    } else {
      li.innerText = menu.title;
    }
    menuUl.appendChild(li);
  });


  var isOpen = false;
  var menuButton = document.getElementById("menuButton");
  menuButton.addEventListener('click', function() {
    if (!isOpen) {
      contentView.className = "menuOpen";
      menuView.className = "menuOpen";

    } else {
      contentView.className = '';
      menuView.className = '';
    }
    isOpen = !isOpen;
  });
});
