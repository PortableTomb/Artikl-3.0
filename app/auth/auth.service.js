class AuthService {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
    this.signedIn = false;

    this.$http.get('/token')
      .then((res) => {
        this.signedIn = res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  isSignedIn() {
    return this.signedIn;
  }

  signIn(email, password) {
    return this.$http.post('/token', { email, password })
      .then(() => {
        // User is signed in
        this.signedIn = true;
        this.$state.go('/');
      })
      .catch((err) => {
        return err;
      });
  }

  signOut() {
    return this.$http.delete('/token')
      .then(() => {
        // User is signed out
        this.signedIn = false;
      })
      .catch((err) => {
        return err;
      });
  }
}

AuthService.$inject = ['$http', '$state'];

export default AuthService;
