class SignUpService {
  constructor($http) {
    this.$http = $http;
  }

  SignUp(username, email, password) {
    return this.$http.post('/users', JSON.stringify({
      username,
      email,
      password
    }))
      .catch((err) => {
        return err;
      });
  }
}
SignUpService.$inject = ['$http'];
export default SignUpService;
