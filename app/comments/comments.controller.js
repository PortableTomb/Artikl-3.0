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
    Materialize.toast('Comment Sucessful!', 4000, 'rounded');

    return this.commentsService.createComment(postId, this.comment);
  }

  deleteComment(postId) {
    return this.commentsService.deleteComment(postId);
  }

  getUsername() {
    return this.userService.getAllUsers();
  }

  removeComment(index) {
    return this.commentsService.removeComment(index);
  }
}

CommentsCtrl.$inject = ['commentsService', 'userService'];
export default CommentsCtrl;
