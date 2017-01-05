class DashCtrl {
  constructor(authService, commentsService, postService, userService) {
    this.authService = authService;
    this.commentsService = commentsService;
    this.postService = postService;
    this.userService = userService;
    this.searchtext = '';
    this.users = [];
    this.posts = [];

    this.filterFunction = function(element) {
      return element.username.match(/^Ma/) ? true : false;
    };
  }

  getAllUsers() {
    return this.userService.getAllUsers();
  }

  // loadUser(id) {
  //   return this.userService.loadUser(id);
  // }

  getAllPosts() {
    console.log('say hi');
    return this.postService.getAllPosts();
  }

}

DashCtrl.$inject = ['authService', 'commentsService', 'PostService', 'userService'];
export default DashCtrl;
