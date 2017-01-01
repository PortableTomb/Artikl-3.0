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
    console.log(postId);
    return this.commentsService.createComment(postId, this.comment);
  }
}

CommentsCtrl.$inject = ['commentsService'];
export default CommentsCtrl;
