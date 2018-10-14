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
      location: [latitude, longitude],
      active: new Date().getTime()
    });
  } else {
    console.log("Not ready to save to database.");
  }
}
function getUsers() {
  database.ref("users").on("value", function (snapshot) {
    let users = snapshot.val();
    console.log(users);
    for (let currentUID in users) {
      if (users.hasOwnProperty(currentUID) && currentUID != uid) {
        let user = users[currentUID];
        others(user.location[0], user.location[1], user.fullName.split(" ").map(x => x.substr(0,1)).join(""));
      }
    }
  }, function (err) {
    console.log(err);
  })
}
