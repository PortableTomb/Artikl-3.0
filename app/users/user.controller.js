class UserCtrl {
  constructor(userService) {
    this.userService = userService;
    this.searchtext = '';
  }

  getAllUsers() {
    return this.userService.getAllUsers();
  }

}

UserCtrl.$inject = ['userService'];
export default UserCtrl;
