class PostCtrl {
  constructor(postService) {
    this.postService = postService;
    this.votes = 0;
    this.searchText = '';
  }

  getSinglePost() {
    return this.postService.getSinglePost();
  }
  getAllPosts() {
    return this.postService.getAllPosts();
  }
  loadPost(post) {
    return this.postService.loadPost(post);
  }
  upvotePost(post) {
    return this.postService.upvotePost(post);
  }
  downvotePost(post) {
    return this.postService.downvotePost(post);
  }
  createPost(postTitle, postImage, postUrl, postText) {
    // console.log(postTitle, postImage, postUrl, postText);
    return this.postService.createPost(postTitle, postImage, postUrl, postText);
  }

  // getPostComments() {
  //   return this.postService;
  // }
  // getPostsAndComments() {
  //   return this.postService;
  // }
  // removePost() {
  //   return this.postService;
  // }
}

PostCtrl.$inject = ['PostService'];

export default PostCtrl;
