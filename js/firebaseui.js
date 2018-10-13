var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      let user = authResult.user;
      let credential = authResult.credential;
      let isNewUser = authResult.additionalUserInfo.isNewUser;
      let providerId = authResult.additionalUserInfo.providerId;
      let operationType = authResult.operationType;
      console.log(user, credential, isNewUser, providerId, operationType);
      return true;
    },
    signInFailure: function (error) {
      console.log(error);
      return error;
    }
  },
  signInSuccessURL: "#",
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        prompt: "select-account"
      }
    }, firebase.auth.FacebookAuthProvider.PROVIDER_ID
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
