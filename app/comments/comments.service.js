class CommentService {

  constructor($http, $state, authService) {
    this.authService = authService;
    this.signedIn = true;

    // singlecomment
    this.comment = '';

    // allcomments
    this.comments = [];

    // createpost
    this.commentContent = '';
    this.postId;
    this.userId;

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

  //   this.createcomment.post('/comments', JSON.stringify({ userId: this.user_id, postId: this.post_id, this.commentContent = comment_content }))
  //   .then((res) => {
  //     this.post = res.data;
  //   })
  //   .catch((err) => {
  //     return err;
  //   });
  }

  getAllComments() {
    return this.comments;
  }

}

CommentService.$inject = ['$http', '$state', 'authService'];

export default CommentService;
