class CommentsCtrl {
  constructor(commentsService, userService) {
    this.commentsService = commentsService;
    this.userService = userService;

    // singlecomment
    this.comment = '';
    this.comments = [];
    this.commentContent = '';
    const postId = this.postId;
    const userId = this.userId;
  }

  getPostComments() {
    return this.commentsService.getPostComments();
  }

  setComments(currentComment) {
    this.commentsService.setComments(currentComment);
  }

  getAllComments() {
    return this.commentsService.getAllComments();
  }

  createComment(postId) {
    return this.commentsService.createComment(postId, this.comment);
  }

  getUsername() {
    return this.userService.getAllUsers();
  }
}

CommentsCtrl.$inject = ['commentsService', 'userService'];
export default CommentsCtrl;
