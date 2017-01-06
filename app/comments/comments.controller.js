class CommentsCtrl {
  constructor(commentsService, userService, followService) {
    this.followService = followService;
    this.commentsService = commentsService;
    this.userService = userService;

    // singlecomment
    this.comment = '';
    this.comments = [];
    this.commentContent = '';
    const postId = this.postId;
    const userId = this.userId;
  }

  getPostComments(postId) {
    return this.commentsService.getPostComments(postId);
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

  deleteComment(commentId) {
    return this.commentsService.deleteComment(commentId);
  }

  getUsername() {
    return this.userService.getAllUsers();
  }

  removeComment(index) {
    return this.commentsService.removeComment(index);
  }

  getAllCommentsFromFollowees() {
    const allComments = this.commentsService.getAllComments();
    const allFollows = this.followService.getAllFollows().map((follow) => follow.followId);
    return allComments.filter((comment) => allFollows.indexOf(comment.userId) >= 0).map(comment =>
      Object.assign(comment, {
        username: this.followService.getAllFollows().filter((follow) => follow.followId === comment.userId)[0].username
      }));
  }

}

CommentsCtrl.$inject = ['commentsService', 'userService', 'followService'];
export default CommentsCtrl;
