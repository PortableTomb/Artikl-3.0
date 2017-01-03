class AuthCtrl {
  constructor(authService) {
    this.authService = authService;
  }

  isSignedIn() {
    return this.authService.isSignedIn();
  }

  isSignedOut() {
    return this.authService.isSignedOut();
  }

  signIn(email, password) {
    return this.authService.signIn(email, password);
  }

  signOut() {
    return this.authService.signOut();
  }
}

AuthCtrl.$inject = ['authService'];

export default AuthCtrl;
