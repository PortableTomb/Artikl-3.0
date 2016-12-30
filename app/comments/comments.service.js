class CommentsService {

  constructor($http, $state, authService) {
    this.authService = authService;
    this.signedIn = true;

    // singlecomment
    // allcomments
    this.comment = '';
    this.comments = [];

    // createpost
    const postId = this.post_id;
    const userId = this.user_id;

    this.token = $http;
    this.allcomments = $http;
    this.singlecomment = $http;
    this.createcomment = $http;

    this.token.get('/token')
      .then((res) => {
        this.signedIn = res.data;
      })
      .catch((err) => {
        return err;
      });

    this.allcomments.get('/comments')
      .then((res) => {
        this.comments = res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  setComments(currentComment) {
    this.current = currentComment;
  }

  createComment(postId, comment) {
    // console.log(comment, userId, postId);
    this.createcomment.post('/comments', { comment: comment, postId: postId })
    .then((res) => {
      this.comment = res.data;
    })
    .catch((err) => {
      return err;
    });
  }

  getAllComments() {
    return this.comments;
  }
}

CommentsService.$inject = ['$http', '$state', 'authService'];

export default CommentsService;

// comment: this.commentContent, userId: this.userId, postId: this.postId
