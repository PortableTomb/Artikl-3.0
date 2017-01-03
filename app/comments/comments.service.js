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
    const comment = this.comment;

    // const comment = this.comment;
    this.token = $http;
    this.allcomments = $http;
    this.singlecomment = $http;
    this.createcomment = $http;
    this.postcomments = $http;
    this.deletecomments = $http;

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

    this.postcomments.get('/comments/' + this.post_id)
      .then((res) => {
        this.comments = res.data;
      })
      .catch((err) => {
        return err;
      });

  }

  getPostComments() {
    if (this.post_id !== this.postId) {
      return;
    }

    return this.comments;
  }

  setComments(currentComment) {
    this.current = currentComment;
  }

  createComment(postId, comment) {
    this.createcomment.post('/comments', { comment: comment, postId: postId })
    .then((res) => {
      this.comments.push(res.data);
      this.comment = res.data;
    })
    .catch((err) => {
      return err;
    });
  }

  deleteComment(postId) {
    this.deletecomments.delete('/comments/' + postId)
    .then((res) => {
      this.comments = [];
    })
    .catch((err) => {
      return err;
    });
  }

  getAllComments() {
    return this.comments;
  }

  // removeComment(index) {
  //   this.comments.splice(index, 1);
  // }
}

CommentsService.$inject = ['$http', '$state', 'authService'];

export default CommentsService;

// comment: this.commentContent, userId: this.userId, postId: this.postId
