
class PostService {

  constructor($http, $state) {
    // singlepost
    this.post = [];

    // allposts
    this.posts = [];

    // this.$http = $http;
    this.allposts = $http;
    this.singlepost = $http;
    this.$state = $state;
    this.signedIn = false;

    this.allposts.get('/posts')
      .then((res) => {
        this.posts = res.data;
      })
      .catch((err) => {
        return err;
      });

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
    
    this.singlepost.get('/posts/1')
      .then((res) => {
        this.post = res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  getSinglePost() {
    return this.post;
  }

  getAllPosts() {
    return this.posts;
  }

}

PostService.$inject = ['$http', '$state'];

export default PostService;
