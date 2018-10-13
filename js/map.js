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

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

function addDraggableMarker(lat, long){

    var marker = new H.map.Marker({lat:lat, lng:long});
    marker.draggable = true;
    map.addObject(marker);
    group.addObject(marker);
    map.setViewBounds(group.getBounds());
    map.addEventListener('dragstart', function(ev) {
      var target = ev.target;
      if (target instanceof H.map.Marker) {
        behavior.disable();
      }
    }, false);
  
    map.addEventListener('dragend', function(ev) {
      var target = ev.target;
      if (target instanceof mapsjs.map.Marker) {
        behavior.enable();
      }
    }, false);
  
     map.addEventListener('drag', function(ev) {
      var target = ev.target,
          pointer = ev.currentPointer;
      if (target instanceof mapsjs.map.Marker) {
        target.setPosition(map.screenToGeo(pointer.viewportX, pointer.viewportY));
      }
    }, false);
}

function plotStaticPoint(watch, lat, long) {
    console.log("working");
    var marker = new H.map.Marker({lat: lat, lng: long});
    marker.color = 'red';
    map.addObject(marker);
    group.addObject(marker);
    map.addObject(group);
    map.setViewBounds(group.getBounds());
}

