class CommentsService {

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
  }

  createComment(commentContent, userId, postId) {
    this.createcomment.post('/comments', JSON.stringify({ commentContent, userId, postId }))
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
