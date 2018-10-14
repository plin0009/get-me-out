var database = firebase.database();
saveLocation(latitude, longitude);

function saveLocation(lat, long) {
  latitude = lat;
  longitude = long;
  if (uid && database && latitude) {
    console.log("Saving to database:", uid, latitude, longitude);
    let userRef = database.ref("users/" + uid);
    userRef.set({
      fullName: name,
      location: [latitude, longitude],
      active: new Date().getTime()
    });
  }
}
function getUsers() {
  database.ref("users").on("value", function (snapshot) {
    if (!uid) return;
    let users = snapshot.val();
    map.removeObjects(map.getObjects());
    for (let currentUID in users) {
      if (users.hasOwnProperty(currentUID)) {
        if (currentUID == uid) {
          you(latitude, longitude, name.split(" ").map(x => x.substr(0,1)).join(""));
          continue;
        }
        let user = users[currentUID];
        others(user.location[0], user.location[1], user.fullName.split(" ").map(x => x.substr(0,1)).join(""));
        console.log(user.fullName);
      }
    }
  }, function (err) {
    console.log(err);
  })
}
