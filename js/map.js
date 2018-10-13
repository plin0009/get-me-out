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
    map.setZoom(25);
}

function plotStaticPoint(watch, lat, long) {
    console.log("working");
    var marker = new H.map.Marker({lat: lat, lng: long});
    map.addObject(marker);
    group.addObject(marker);
    map.addObject(group);
    map.setViewBounds(group.getBounds());
}
