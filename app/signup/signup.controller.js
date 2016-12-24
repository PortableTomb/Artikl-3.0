class SignUpCtrl {
  constructor(signUpSvc) {
    this.signUpSvc = signUpSvc;
    this.username = '';
    this.email = '';
    this.password = '';
  }

isSignedIn() {
  return AuthService.isSignedIn();
}

  signUp() {
    if ( !this.username || !this.email || !this.password) {
      console.log("Houston we have a problem.");
    }
    this.signUpSvc.SignUp(this.username, this.email, this.password)
    .then(() => {
      this.username = '';
      this.email = '';
      this.password = '';
    })
    .catch((err) => {
      throw err;
    });
  }
}
SignUpCtrl.$inject = ['SignUpService'];
export default SignUpCtrl;
