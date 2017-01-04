class UserService {

  constructor($http, $state, authService) {
    this.authService = authService;
    this.signedIn = true;
    this.$state = $state;
    this.user = [];
    this.users = [];
    this.token = $http;
    this.allusers = $http;
    this.singleuser = $http;

    // const userId = window.QUERY_PARAMETERS.id;

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

  getUsername() {
    return this.users;
  }

  loadUser(user) {
    this.singleuser.get('/users/' + user.id)
    .then((res) => {
      this.user = res.data;
    })
    .catch((err) => {
      return err;
    });
  }

  // followUser() {
  //   const follow = this.userSearch.userId;
  //   return this.followUser(follow);
  // }

}

UserService.$inject = ['$http', '$state', 'authService'];
export default UserService;
