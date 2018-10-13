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
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        "https://www.googleapis.com/auth/plus.login"
      ],
      customParameters: {
        prompt: "select-account"
      }
    },
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      scopes: ["default"]
    }
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
