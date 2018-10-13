var database = firebase.database();
saveLocation(latitude, longitude);

function saveLocation(lat, long) {
  latitude = lat;
  longitude = long;

  if (uid && database && latitude) {
    console.log("Saving to database:", uid, latitude, longitude);
  } else {
    console.log("No");
  }
}
