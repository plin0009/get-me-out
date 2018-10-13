function useIP() {
  $.getJSON("https://json.geoiplookup.io/?callback=?",
      function (data) {
        console.log(data);
        moveToUser(data.latitude, data.longitude);
        saveLocation(data.latitude, data.longitude);
        you(data.latitude, data.longitude);
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
      app_code: '9v2BkviRwi9Ot26kp2IysQ',
    },
    success: function (watchData) {
      if (watchData.nwsAlerts && watchData.nwsAlerts.watch) {
        for (i = watchData.nwsAlerts.watch.length-1; i >= 0; i--) {
          if (watchData.nwsAlerts.watch[i].type == 9) {
            addInfoBlock(1, watchData.nwsAlerts.watch[i].description, watchData.nwsAlerts.watch[i].message, watchData.nwsAlerts.watch[i].validFromTimeLocal, watchData.nwsAlerts.watch[i].severity);
            plotStaticPointWatch(watchData.nwsAlerts.watch[watchData.nwsAlerts.watch.length-1].zone[j].latitude, watchData.nwsAlerts.watch[watchData.nwsAlerts.watch.length-1].zone[j].longitude);
          }
        }
      }
      if (watchData.nwsAlerts && watchData.nwsAlerts.warning) {
        for (i = watchData.nwsAlerts.warning.length-1; i >= 0; i--) {
          if (watchData.nwsAlerts.warning[i].type == 9) {
            addInfoBlock(0, watchData.nwsAlerts.warning[i].description, watchData.nwsAlerts.warning[i].message, watchData.nwsAlerts.warning[i].validFromTimeLocal, watchData.nwsAlerts.warning[i].severity);
            plotStaticPointWarning(watchData.nwsAlerts.warning[watchData.nwsAlerts.warning.length-1].zone[j].latitude, watchData.nwsAlerts.warning[watchData.nwsAlerts.warning.length-1].zone[j].longitude);
          }
        }
      }
      ending();
    }
  });
}
