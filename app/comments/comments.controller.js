class CommentCtrl {
  constructor(commentService) {
    this.commentService = commentService;
  }

  getAllComments() {
    return this.commentService.getAllPosts();
  }
}

CommentCtrl.$inject = ['CommentService'];

export default CommentCtrl;
