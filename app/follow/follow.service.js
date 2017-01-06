class FollowService {

  constructor($http, $state, authService, userService) {
    this.authService = authService;
    this.userService = userService;
    this.signedIn = true;
    this.token = $http;

    this.$state = $state;
    this.user = [];
    this.users = [];
    this.follow = [];
    this.follows = [];

    this.allusers = $http;
    this.singleuser = $http;
    this.allfollows = $http;
    this.createfollow = $http;
    this.deletefollow = $http;

    // TOKEN
    this.token.get('/token')
      .then((res) => {
        this.signedIn = res.data;
      })
      .catch((err) => {
        return err;
      });

    // AllFollows
    this.allfollows.get('/follows')
      .then((res) => {
        this.follows = res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  getAllFollows() {
    return this.follows;
  }

  createFollow(followId) {
    const find = this.follows.filter((follow) => follow.followId === followId)
    if ( find.length > 0) {
      return;
    }
    this.createfollow.post('/follows', { followId })
    .then((res) => {
      return this.allfollows.get('/follows');
    })
    .then((res) => {
      this.follows = res.data;
    })  
    .catch((err) => {
      return err;
    });
  }

  deleteFollow(id) {
    console.log(id);
    this.deletefollow.delete('/follows/' + id)
    .then((res) => {
      this.follows = this.follows.filter((follow) => follow.id !== id);
      res = this.follows;
    })
    .catch((err) => {
      return err;
    });
  }

}
FollowService.$inject = ['$http', '$state', 'authService', 'userService'];
export default FollowService;
