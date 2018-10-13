var uiConfig = {
  signInSuccessUrl: alert("123"),
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  tosUrl: "tos.html",
  privacyPolicyUrl: "pp.html"
};
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#firebase-ui-container", uiConfig);
