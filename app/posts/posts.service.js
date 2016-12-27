
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
    this.userId;
    this.signedIn = true;

    this.token = $http;
    this.allposts = $http;
    this.singlepost = $http;
    this.createpost = $http;
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

    // this.singlepost.get('/posts')
    //   .then((res) => {
    //     this.post = res.data;
    //   })
    //   .catch((err) => {
    //     return err;
    //   });

    // this.createpost.post('/posts', JSON.stringify({ userId: users_posts.user_id, postTitle: this.post_title, postUrl: this.post_url, postImage: this.post_image, postText: this.post_text }))
    // .then((res) => {
    //   this.post = res.data;
    // })
    // .catch((err) => {
    //   return err;
    // });
  }

  getSinglePost() {
    return this.post;
  }

  getAllPosts() {
    return this.posts;
  }

  upvotePost() {
    // console.log(this.votes++);
    return this.votes++;
  }

  downvotePost() {
    // console.log(this.votes--);
    if (this.votes < 0) {
      return 0;
    }
    this.votes--;
    return this.votes;
  }

  // createPost(userId, postTitle, postUrl, postImage, postText) {
  //   return this.post;
  // }

}

PostService.$inject = ['$http', '$state', 'authService'];

export default PostService;

// function getSinglePost(id) {
// this.singlepost.get('/posts/:'+ id)
//
//   .then((res) => {
//     this.post = res.data;
//   })
//   .catch((err) => {
//     return err;
//   });
// }
