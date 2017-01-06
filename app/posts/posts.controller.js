class PostCtrl {
  constructor(postService, followService) {
    this.postService = postService;
    this.followService = followService;
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
    Materialize.toast('Post Successful!', 4000, 'rounded');
    return this.postService.createPost(this.postTitle, this.postImage, this.postUrl, this.postText);
  }

  deletePost(postId) {
    return this.postService.deletePost(postId);
  }

  getPostTopics() {
    return this.postService;
  }

  getAllPostsFromFollowees() {
    const allPosts = this.postService.getAllPosts();
    const allFollows = this.followService.getAllFollows().map((follow) => follow.followId);

    return allPosts.filter((post) => allFollows.indexOf(post.userId) >= 0)
  }

}

PostCtrl.$inject = ['PostService', 'followService'];

export default PostCtrl;
