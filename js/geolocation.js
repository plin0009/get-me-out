function useGeolocation() {
  if ("geolocation" in navigator) {
    // use success and error callback functions
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
  } else {
    // browser does not support geolocation api
    console.log("Navigator object not available");
  }
}
function geolocationSuccess(position) {
  // got the geolocation
  console.log("User geolocation: ", position.coords.latitude, position.coords.longitude);
  moveToUser(position.coords.latitude, position.coords.longitude);
}
function geolocationError(error) {
  // most likely user denied to use location
  console.log("Could not get location (" + error.code + ")", error.message);
}
