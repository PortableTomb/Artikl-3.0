
class PostService {

  constructor($http, $state, authService) {
    this.authService = authService;
    this.$state = $state;
    this.signedIn = false;

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

    // $http
    this.comments = $http;
    this.token = $http;
    this.allposts = $http;
    this.singlepost = $http;
    this.createpost = $http;
    this.deleteposts = $http;

    // voting
    this.downvote = $http;
    this.upvote = $http;
    this.votes = 0;

    //topics
    this.selectedTopic = '';
    this.setTopic = function(topic) {
      this.selectedTopic = topic;
    }

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

  getAllPosts() {
    return this.posts;
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

  createPost(postTitle, postUrl, postImage, postText, topicId ) {
    // console.log(postTitle, postUrl, postImage, postText);
    this.createpost.post('/posts', { postTitle: postTitle, postUrl: postUrl, postImage: postImage, postText: postText, topicId: topicId })
    .then((res) => {
      this.posts.push(res.data);
      this.post = res.data;
    })
    .catch((err) => {
      return err;
    });
  }

  deletePost(id) {
    this.deleteposts.delete('/posts/' + id)
    .then((res) => {
      this.posts = this.posts.filter((pos) => pos.id !== id);
      res = this.posts;
    })
    .catch((err) => {
      return err;
    });
  }

}

PostService.$inject = ['$http', '$state', 'authService'];
export default PostService;
