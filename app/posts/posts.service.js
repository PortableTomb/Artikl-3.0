
class PostService {

  constructor($http, $state, authService) {
    this.authService = authService;
    // singlepost
    this.post = [];

    // allposts
    this.posts = [];

    // createpost
    this.postTitle = '';
    this.postUrl = '';
    this.postImage = '';
    this.postText = '';
    this.userId = '';
    this.signedIn = true;

    this.comments = $http;
    this.token = $http;
    this.allposts = $http;
    this.singlepost = $http;
    this.createpost = $http;
    this.downvote = $http;
    this.upvote = $http;
    this.$state = $state;
    this.signedIn = false;
    this.votes = 0;

    this.token.get('/token')
      .then((res) => {
        this.signedIn = res.data;
      })
      .catch((err) => {
        return err;
      });

    this.allposts.get('/posts')
      .then((res) => {
        this.posts = res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  getSinglePost() {
    return this.post;
  }

  loadPost(post) {
    this.singlepost.get('/posts/' + post.id)
    .then((res) => {
      this.post = res.data;
    })
    .catch((err) => {
      return err;
    });
  }
  getAllPosts() {
    return this.posts;
  }

  upvotePost(post) {
    post.votes++;

    this.upvote.patch('/posts/' + post.id, { votes: post.votes })
    .then((res) => {
      this.post = res.data;
    })
    .catch((err) => {
      return err;
    });
  }

  downvotePost(post) {
    if (post.votes <= 0) {
      return 0;
    }

    post.votes--;

    this.downvote.patch('/posts/' + post.id, { votes: post.votes })
    .then((res) => {
      this.post = res.data;
    })
    .catch((err) => {
      return err;
    });

  }

  createPost(postTitle, postUrl, postImage, postText ) {
    // console.log(postTitle, postUrl, postImage, postText);
    this.createpost.post('/posts', { postTitle: postTitle, postUrl: postUrl, postImage: postImage, postText: postText })
    .then((res) => {
      this.post = res.data;
    })
    .catch((err) => {
      return err;
    });
  }

}

PostService.$inject = ['$http', '$state', 'authService'];
export default PostService;
