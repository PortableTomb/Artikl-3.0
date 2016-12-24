class PostCtrl {
  constructor(postService) {
    this.postService = postService;
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
}

PostCtrl.$inject = ['PostService'];

export default PostCtrl;
