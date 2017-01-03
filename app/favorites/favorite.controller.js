class FavoriteCtrl {
  constructor() {
    this.favorite = false;
  }

  toggleFav() {
    this.favorite = !this.favorite;

    this.favorite.patch('/posts/' + post.id, { likes: post.likes })
    .then((res) => {
      this.post = res.data;
    })
    .catch((err) => {
      return err;
    });
  }

}
export default FavoriteCtrl;
