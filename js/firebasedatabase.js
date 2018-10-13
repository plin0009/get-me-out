var database = firebase.database();
saveLocation(latitude, longitude);

function saveLocation(lat, long) {
  latitude = lat;
  longitude = long;

  if (uid && database && latitude) {
    console.log("Saving to database:", uid, latitude, longitude);
    let userRef = database.ref("users/" + uid);
    console.log(userRef);
    userRef.set({
      fullName: name,
      profilePic: photoURL,
      location: [latitude, longitude]
    });
    console.log(userRef);
  } else {
    console.log("No");
  }
}

function getLocations() {
  console.log(firebase.database());
  if (firebase.database()) {
    console.log(firebase.database().ref("users"));
  }
}

function getOwnData() {
  if (uid && firebase.database()) {
    let userRef = firebase.database().ref("users/" + uid);
    console.log(userRef);
    return userRef.val();
  }
}
function getOwnDataTemp() {
  return photoURL;
}
