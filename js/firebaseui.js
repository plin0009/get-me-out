var uiConfig = {
  signInSuccessUrl: "#",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  tosUrl: "#",
  privacyPolicyUrl: "#"
};
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#firebaseui", uiConfig);
