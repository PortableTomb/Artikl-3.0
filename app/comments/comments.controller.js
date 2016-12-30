class CommentsCtrl {
  constructor(commentsService) {
    this.commentsService = commentsService;

    // singlecomment
    this.comment = '';
    this.comments = [];
    this.commentContent = '';
    const postId = this.postId;
    const userId = this.userId;
  }

  setComments(currentComment) {
    this.commentsService.setComments(currentComment);
  }

  getAllComments() {
    return this.commentsService.getAllComments();
  }

  createComment(comment, userId, postId) {
    console.log(comment, userId, postId);
    return this.commentsService.createComment(comment, userId, postId);
  }
}

CommentsCtrl.$inject = ['commentsService'];
export default CommentsCtrl;
