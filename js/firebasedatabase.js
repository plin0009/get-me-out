var database = firebase.database();
saveLocation(latitude, longitude);

function saveLocation(lat, long) {

  if (uid && database && latitude) {
    latitude = lat;
    longitude = long;
    console.log("Saving to database:", uid, latitude, longitude);
    let userRef = database.ref("users/" + uid);
    console.log(userRef);
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
    map.removeAllObjects();
    for (let currentUID in users) {
      if (users.hasOwnProperty(currentUID) && currentUID !== uid) {
        let user = users[currentUID];
        others(user.location[0], user.location[1], user.fullName.split(" ").map(x => x.substr(0,1)).join(""));
        console.log(user.fullName);
      }
    }
  }, function (err) {
    console.log(err);
  })
}
