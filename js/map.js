var map, group = new H.map.Group();

function loadMap() {
  var platform = new H.service.Platform({
    app_id: 'devportal-demo-20180625',
    app_code: '9v2BkviRwi9Ot26kp2IysQ',
    useHTTPS: true
  });
  var pixelRatio = window.devicePixelRatio || 1;

  var defaultLayers = platform.createDefaultLayers({
      tileSize: pixelRatio === 1 ? 128 : 256,
      ppi: pixelRatio === 1 ? undefined : 320
  });

  map = new H.Map(document.getElementById('map'),
      defaultLayers.normal.map, {pixelRatio: pixelRatio});

  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

  var ui = H.ui.UI.createDefault(map, defaultLayers);
}

function moveToUser(latitude, longitude) {
    map.setCenter({lat: latitude, lng: longitude});
    map.setZoom(10);
}

function plotStaticPoint(watch, lat, long) {
    var marker = new H.map.Marker({lat: lat, lng: long});
    map.addObject(marker);
    group.addObject(marker);
    map.addObject(group);
    //map.setViewBounds(group.getBounds());
    //console.log(map.getZoom());
    //if (map.getZoom() < 10) map.setZoom(10);
}

function you(latitude, longitude) {
    var svgMarkup = '<svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="black" fill="blue" x="1" y="1" width="22" height="22" />' +
    '<text x="12" y="18" font-size="12pt" font-family="Arial" font-weight="bold" ' +
    'text-anchor="middle" fill="black" >U</text></svg>';

    var yourMarkerIcon = new H.map.Icon(svgMarkup);
    var yourMarker = new H.map.Marker({lat: latitude, lng: longitude}, {icon: yourMarkerIcon});
    map.addObject(yourMarker);
}