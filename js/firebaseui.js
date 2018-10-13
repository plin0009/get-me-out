var uid, name, photoURL;
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      let user = authResult.user;
      uid = user.uid;
      name = user.displayName;
      photoURL = user.photoURL;
      console.log(uid);
      saveLocation(latitude, longitude);
      return false;
    },
    signInFailure: function (error) {
      console.log(error);
      return error;
    }
  },
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  tosUrl: function () {
    alert("Terms of Service coming soon");
  },
  privacyPolicyUrl: function () {
    alert("Privacy Policy coming soon");
  }
};
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#firebaseui", uiConfig);
