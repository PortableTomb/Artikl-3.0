class UserService {

  constructor($http, $state, authService) {
    this.authService = authService;
    this.signedIn = true;

    this.user = [];
    this.users = [];
    this.token = $http;
    this.allusers = $http;

    this.token.get('/token')
      .then((res) => {
        this.signedIn = res.data;
      })
      .catch((err) => {
        return err;
      });

    this.allusers.get('/users')
      .then((res) => {
        this.users = res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  getAllUsers() {
    return this.users;
  }

}

UserService.$inject = ['$http', '$state', 'authService'];
export default UserService;
