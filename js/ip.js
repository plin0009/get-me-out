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
  $.getJSON("https://weather.cit.api.here.com/weather/1.0/report.json?product=alerts&name="+city+"&app_id=MNMVa60AhFwhk7UGo1lD&app_code=xY8cMEGImPL_5mndE7WeWQ", 
    function(cityData) {
      console.log(cityData);
    }
  )
}
