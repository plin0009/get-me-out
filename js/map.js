var map, group = new H.map.Group(), platform, targetlat, targetlng;
var maneuversGroup = new  H.map.Group();

function loadMap() {
    platform = new H.service.Platform({
    app_id: 'devportal-demo-20180625',
    app_code: '9v2BkviRwi9Ot26kp2IysQ',
    useHTTPS: true
  });



  var pixelRatio = window.devicePixelRatio || 1;

  var defaultLayers = platform.createDefaultLayers({
      tileSize: pixelRatio === 1 ? 128 : 256,
      ppi: pixelRatio === 1 ? undefined : 320
  });
  defaultLayers.normal.map.setMax(18);
  defaultLayers.normal.map.setMin(4);

  map = new H.Map(document.getElementById('map'),
      defaultLayers.normal.map, {pixelRatio: pixelRatio});

  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  var ui = H.ui.UI.createDefault(map, defaultLayers);
  map.addObject(group);
  map.addObject(maneuversGroup);
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
}

function plotStaticPointWarning(lat, long) {
    var svgMarkup = '<svg  width="40" height="40" xmlns="http://www.w3.org/2000/svg">' +
    '<circle stroke="red" fill="red" fill-opacity="0.4" cx="20" cy="20" r="20" />' +
    '<text x="20" y="18" font-size="12pt" font-family="Arial" font-weight="bold" ' +
    'text-anchor="middle" fill="red" > </text></svg>';
    var warningIcon = new H.map.Icon(svgMarkup);
    var marker = new H.map.Marker({lat: lat, lng: long}, {icon: warningIcon});
    //map.addObject(marker);
    group.addObject(marker);
}

function others(latitude, longitude, initial, userID) {
    var svgMarkup = '<svg  width="30" height="30" xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="black" fill="purple" fill-opacity="0.5" x="1" y="1" width="30" height="30" />' +
    '<text x="15" y="22" font-size="12pt" font-family="Arial" font-weight="bold" ' +
    'text-anchor="middle" fill="black" >'+initial+'</text></svg>';

    var otherIcon = new H.map.Icon(svgMarkup);
    var otherMarker = new H.map.Marker({lat: latitude, lng: longitude}, {icon: otherIcon, data:{uid:userID}});
    console.log(otherMarker);
    //map.addObject(otherMarker);
    group.addObject(otherMarker);
}

function you(latitude, longitude, initial) {
    var svgMarkup = '<svg  width="30" height="30" xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="black" fill="blue" fill-opacity="0.5" x="1" y="1" width="30" height="30" />' +
    '<text x="15" y="22" font-size="12pt" font-family="Arial" font-weight="bold" ' +
    'text-anchor="middle" fill="black" >'+initial+'</text></svg>';

    var yourMarkerIcon = new H.map.Icon(svgMarkup);
    var yourMarker = new H.map.Marker({lat: latitude, lng: longitude}, {icon: yourMarkerIcon, data: {uid:uid}});
    console.log(yourMarker);
    map.addObject(yourMarker);
    group.addObject(yourMarker);
}

function ending() {
    map.addObject(group);
    group.getBounds() && map.setViewBounds(group.getBounds());
}

function calculateRouteFromAtoB (lat1, lng1, lat2, lng2) {
    var router = platform.getRoutingService(),
      routeRequestParams = {
        mode: 'fastest;car',
        representation: 'display',
        routeattributes : 'waypoints,summary,shape,legs',
        maneuverattributes: 'direction,action',
        waypoint0: lat1+','+lng1,
        waypoint1: lat2+','+lng2
      };


    router.calculateRoute(routeRequestParams, onSuccess, onError);
}

function onSuccess (result) {
    var route = result.response.route[0];
    addRouteShapeToMap(route);
    addManueversToMap(route);

    addSummaryToPanel(route.summary);
}

function onError (error) {
    alert("Couldn't find a route.");
}

var mapContainer = document.getElementById('map');
var polyline;

function addRouteShapeToMap (route) {
    var lineString = new H.geo.LineString(), routeShape = route.shape;

    routeShape.forEach(function(point) {
        var parts = point.split(',');
        lineString.pushLatLngAlt(parts[0], parts[1]);
    });

    polyline = new H.map.Polyline(lineString, {
        style: {
          lineWidth: 4,
          strokeColor: 'rgba(26, 24, 41, 0.7)'
        }
      });

      map.addObject(polyline);
      map.setViewBounds(polyline.getBounds(), true);
}


function addManueversToMap (route) {
    var svgMarkup = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"> <circle cx="8" cy="8" r="8" fill="rgba(26, 24, 41, 0.7)" stroke="white" stroke-width="1"/></svg>';
    var dot = new H.map.Icon(svgMarkup, {anchor: {x:8, y:8}});


    for (i = 0;  i < route.leg.length; i += 1) {
        for (j = 0;  j < route.leg[i].maneuver.length; j += 1) {
          // Get the next maneuver.
          maneuver = route.leg[i].maneuver[j];
          // Add a marker to the maneuvers group
          var marker =  new H.map.Marker({
            lat: maneuver.position.latitude,
            lng: maneuver.position.longitude} ,
            {icon: dot});
          marker.instruction = maneuver.instruction;
          maneuversGroup.addObject(marker);
        }
    }


}



function addSummaryToPanel (summary) {
    // just use summary.distance and summary.time somehow
    $("#route-distance").text(summary.distance);
    $("#route-time").text(summary.time);
}

function setUpClickListener() {
    // Attach an event listener to map display
    // obtain the coordinates and display in an alert box.
    map.addEventListener('tap', function (evt) {
      var coord = map.screenToGeo(evt.currentPointer.viewportX,
              evt.currentPointer.viewportY);
              targetlat = coord.lat, targetlng = coord.lng;
    });
  }

function removePreviousRoutes() {
    map.removeObject(polyline);
    map.removeObject(maneuversGroup);
}
