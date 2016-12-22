class AuthService {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
    this.signedIn = false;

    this.$http.get('/api/token')
      .then((res) => {
        this.signedIn = res.data;
      })
      .catch(() => {
        // There was some error
      });
  }

  isSignedIn() {
    return this.signedIn;
  }

  signIn(email, password) {
    return this.$http.post('/api/token', { email, password })
      .then(() => {
        // User is signed in
        this.signedIn = true;
        this.$state.go('catalog');
      })
      .catch(() => {
        // User could not sign in
      });
  }

  signOut() {
    return this.$http.delete('/api/token')
      .then(() => {
        // User is signed out
        this.signedIn = false;
      })
      .catch((err) => {
        // Server failed
      });
  }
}

AuthService.$inject = ['$http', '$state'];

export default AuthService;
