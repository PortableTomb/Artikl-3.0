const favorite = function() {
  return {
    restrict: 'E',
    template: '<button class="notbtn" ng-click="favoriteCtrl.toggleFav()"><i class="material-icons" ng-class="{active: favoriteCtrl.favorite}">favorite</i></button>',
    controller: 'FavoriteCtrl',
    controllerAs: 'favoriteCtrl',
    scope: {}
  };
};

export default favorite;
