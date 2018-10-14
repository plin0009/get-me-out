var latitude, longitude;

window.onload = function() {
  // everything that happens on pageload goes here
  loadMap();
  useIP();
  useGeolocation();
  setInterval(function () {
    saveLocation(latitude, longitude);
  }, 15000);
}
