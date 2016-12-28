class CommentsCtrl {
  constructor(commentsService) {
    this.commentsService = commentsService;

    //createComment
    this.userId;
  }

  getAllComments() {
    return this.commentsService.getAllComments();
  }

  createComment(comment) {
    return this.commentsService.createComment(comment);
  }
}

CommentsCtrl.$inject = ['commentsService'];

export default CommentsCtrl;
