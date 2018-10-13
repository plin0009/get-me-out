var uiConfig = {
  signInSuccessUrl: "alert('123')",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  tosUrl: function () {
    alert("Coming soon");
  },
  privacyPolicyUrl: function () {
    alert("Coming soon");
  }
};
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#firebaseui", uiConfig);

function authLogin() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
    }
  })
}
