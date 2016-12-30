class PostCtrl {
  constructor(postService) {
    this.postService = postService;
    this.searchText = '';
    this.postTitle = '';
    this.postImage = '';
    this.postUrl = '';
    this.postText = '';
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
  createPost() {
    // console.log(postTitle, postImage, postUrl, postText);
    return this.postService.createPost(this.postTitle, this.postImage, this.postUrl, this.postText);
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
