class PostService {
  constructor($http, $state) {
    this.posts =[];
    this.$http = $http;
    this.$state = $state;
    this.signedIn = false;

    this.$http.get('/posts')
      .then((res) => {
        this.posts = res.data;
        console.log(this.posts);

      })
      .catch(() => {
        throw new Error('Could not retrieve posts.');
      });
  }

  getAllPosts() {
    console.log('tiny ass step');
    return this.posts;
  }
}

PostService.$inject = ['$http', '$state'];

export default PostService;
