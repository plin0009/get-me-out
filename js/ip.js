$.getJSON("https://json.geoiplookup.io/?callback=?",
    function (data) {
      console.log(data);
      // TODO: use data.city for later
      usingGeolocation || moveToUser(data.latitude, data.longitude);
    }
);
