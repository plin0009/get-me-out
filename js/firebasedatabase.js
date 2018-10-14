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
    var users = snapshot.val();
    let keys = Object.keys(users);
    for (let marker in group.getObjects()) {
      console.log(marker);
      let currentUID = marker.getData().uid;
      if (users.hasOwnProperty(currentUID)) {
        marker.setPosition({lat: users[currentUID].location[0], lng: users[currentUID].location[1]});
        keys = keys.filter(id => id != currentUID);
      }
    }
    for (let currentUID in keys) {
      if (currentUID == uid) {
        you(latitude, longitude, name.split(" ").map(x => x.substr(0,1)).join(""));
        continue;
      }
      console.log(users, currentUID);
      let user = users[currentUID];
      others(user.location[0], user.location[1], user.fullName.split(" ").map(x => x.substr(0,1)).join(""), currentUID);
    }
  }, function (err) {
    console.log(err);
  });
}
