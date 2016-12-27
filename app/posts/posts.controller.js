class PostCtrl {
  constructor(postService) {
    this.postService = postService;
    this.votes = 0;
  }

  getSinglePost() {
    return this.postService.getSinglePost();
  }
  getAllPosts() {
    return this.postService.getAllPosts();
  }
  getPostComments() {
    return this.postService;
  }
  getPostsAndComments() {
    return this.postService;
  }
  createPost() {
    return this.postService;
  }
  removePost() {
    return this.postService;
  }

  upvotePost() {
    return this.postService.upvotePost();
  }
  downvotePost() {
    return this.postService.downvotePost();
  }
}

PostCtrl.$inject = ['PostService'];

export default PostCtrl;
