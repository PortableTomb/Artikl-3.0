class CommentsCtrl {
  constructor(commentsService) {
    this.commentsService = commentsService;
  }

  getAllComments() {
    return this.commentsService.getAllComments();
  }
}

CommentsCtrl.$inject = ['commentsService'];

export default CommentsCtrl;
