class FavoriteCtrl {
  constructor() {
    this.favorite = false;
  }

  toggleFav() {
    this.favorite = !this.favorite;
  }

}
export default FavoriteCtrl;
