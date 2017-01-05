class UserCtrl {
  constructor(userService) {
    this.userService = userService;
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

}

UserCtrl.$inject = ['userService'];
export default UserCtrl;
