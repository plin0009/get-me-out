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
  defaultLayers.normal.map.setMax(14);
  defaultLayers.normal.map.setMin(4);
  

  map = new H.Map(document.getElementById('map'),
      defaultLayers.normal.map, {pixelRatio: pixelRatio});

  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  var ui = H.ui.UI.createDefault(map, defaultLayers);
}

function moveToUser(latitude, longitude) {
    map.setCenter({lat: latitude, lng: longitude});
    map.setZoom(10);
}

function plotStaticPointWatch(lat, long) {
    var svgMarkup = '<svg  width="40" height="40" xmlns="http://www.w3.org/2000/svg">' +
    '<circle stroke="orange" fill="orange" fill-opacity="0.4" cx="20" cy="20" r="20" />' +
    '<text x="20" y="18" font-size="12pt" font-family="Arial" font-weight="bold" ' +
    'text-anchor="middle" fill="orange" > </text></svg>';
    var watchIcon = new H.map.Icon(svgMarkup);
    var marker = new H.map.Marker({lat: lat, lng: long}, {icon: watchIcon});
    map.addObject(marker);
    group.addObject(marker);
    //console.log(map.getZoom());
    //if (map.getZoom() < 10) map.setZoom(10);
}

function plotStaticPointWarning(lat, long) {
    var svgMarkup = '<svg  width="40" height="40" xmlns="http://www.w3.org/2000/svg">' +
    '<circle stroke="red" fill="red" fill-opacity="0.4" cx="20" cy="20" r="20" />' +
    '<text x="20" y="18" font-size="12pt" font-family="Arial" font-weight="bold" ' +
    'text-anchor="middle" fill="red" > </text></svg>';
    var warningIcon = new H.map.Icon(svgMarkup);
    var marker = new H.map.Marker({lat: lat, lng: long}, {icon: warningIcon});
    map.addObject(marker);
    group.addObject(marker);
    //console.log(map.getZoom());
    //if (map.getZoom() < 10) map.setZoom(10);
}

function others(latitude, longitude) {
    var svgMarkup = '<svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="black" fill="purple" fill-opacity="0.4" x="1" y="1" width="22" height="22" />' +
    '<text x="12" y="18" font-size="12pt" font-family="Arial" font-weight="bold" ' +
    'text-anchor="middle" fill="white" ></text></svg>';

}

function you(latitude, longitude) {
    var svgMarkup = '<svg  width="30" height="30" xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="black" fill="blue" fill-opacity="0.5" x="1" y="1" width="22" height="22" />' +
    '<text x="12" y="18" font-size="12pt" font-family="Arial" font-weight="bold" ' +
    'text-anchor="middle" fill="black" >U</text></svg>';

    var yourMarkerIcon = new H.map.Icon(svgMarkup);
    var yourMarker = new H.map.Marker({lat: latitude, lng: longitude}, {icon: yourMarkerIcon});
    map.addObject(yourMarker);
    group.addObject(yourMarker);
}

function ending() {
    map.addObject(group);
    map.setViewBounds(group.getBounds());
}