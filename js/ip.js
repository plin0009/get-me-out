function useIP() {
  $.getJSON("https://json.geoiplookup.io/?callback=?",
      function (data) {
        console.log(data);
        // TODO: use data.city for later
        usingGeolocation || moveToUser(data.latitude, data.longitude);
        getWatch(data.latitude, data.longitude);
      }
  );
}

function getWatch(lat, long) {
  $.ajax({
    url: 'https://weather.cit.api.here.com/weather/1.0/report.json',
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'jsonpcallback',
    data: {
      product: 'nws_alerts',
      latitude: lat,
      longitude: long,
      oneobservation: 'true',
      app_id: 'devportal-demo-20180625',
      app_code: '9v2BkviRwi9Ot26kp2IysQ'
    },
    success: function (watchData) {
      if (watchData.nwsAlerts.watch) {
        for (i = watchData.nwsAlerts.watch.length-1; i >= 0; i--) {
          if (watchData.nwsAlerts.watch[i].type == 9) {
            console.log(watchData.nwsAlerts.watch[i].description); // put this on the right side of the website
            for (j = 0; j < watchData.nwsAlerts.watch[i].zone.length; j++) {
              plotStaticPoint(true, watchData.nwsAlerts.watch[i].zone[j].latitude, watchData.nwsAlerts.watch[i].zone[j].longitude);
            }
          }
        }
      }
      if (watchData.nwsAlerts.warning) {
        for (i = watchData.nwsAlerts.warning.length-1; i >= 0; i--) {
          if (watchData.nwsAlerts.warning[i].type == 9) {
            console.log(watchData.nwsAlerts.warning[i].description); // put this on the right side of the website
            for (j = 0; j < watchData.nwsAlerts.warning[i].zone.length; j++) {
              plotStaticPoint(false, watchData.nwsAlerts.warning[i].zone[j].latitude, watchData.nwsAlerts.warning[i].zone[j].longitude);
            }
          }
        }
      }
    }
  });
}
