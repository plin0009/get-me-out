function useIP() {
  $.getJSON("https://json.geoiplookup.io/?callback=?",
      function (data) {
        console.log(data);
        // TODO: use data.city for later
        usingGeolocation || moveToUser(data.latitude, data.longitude);
        getWatch(data.city);
      }
  );
}

function getWatch(city) {
  $.getJSON("https://weather.cit.api.here.com/weather/1.0/report.json?product=alerts&name="+city+"&app_id=devportal-demo-20180625&app_code=9v2BkviRwi9Ot26kp2IysQ", 
    function(cityData) {
      console.log(cityData);
    }
  )
}
