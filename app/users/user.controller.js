class UserCtrl {
  constructor(userService, followService) {
    this.userService = userService;
    this.followService = followService;
    this.searchtext = '';
    this.users = [];

    this.filterFunction = function(element) {
      return element.username.match(/^Ma/) ? true : false;
    };
  }

  getAllUsers() {
    return this.userService.getAllUsers();
  }

  loadUser(id) {
    return this.userService.loadUser(id);
  }

// FOLLOWS
  getAllFollows() {
    return this.followService.getAllFollows();
  }

  createFollow(followId) {
    return this.followService.createFollow(followId);
  }
}

UserCtrl.$inject = ['userService', 'followService'];
export default UserCtrl;
