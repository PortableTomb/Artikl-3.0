// angular
import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';

// controllers
import AuthCtrl from './auth/auth.controller';
import FavoriteCtrl from './favorites/favorite.controller';
import PostCtrl from './posts/posts.controller';
import SignUpCtrl from './signup/signup.controller';

// services
import AuthService from './auth/auth.service';
import PostService from './posts/posts.service';
import SignUpService from './signup/signup.service';

// directives
import favorite from './favorites/favorite.directive';

angular.module('my-app', [angularMaterialize, uiRouter])
.controller('AuthCtrl', AuthCtrl)
.controller('FavoriteCtrl', FavoriteCtrl)
.controller('PostCtrl', PostCtrl)
.controller('SignUpCtrl', SignUpCtrl)
.service('authService', AuthService)
.service('PostService', PostService)
.service('SignUpService', SignUpService)
.directive('gsFavorite', favorite)
.config(['$stateProvider', ($stateProvider) => {
  $stateProvider
      .state('auth', {
        url: '/auth',
        templateUrl: 'views/auth.html',
        controller: 'AuthCtrl',
        controllerAs: 'authCtrl'
      })
      .state('singlepost', {
        url: '/singlepost',
        templateUrl: 'views/singlepost.html',
        controller: 'PostCtrl',
        controllerAs: 'postCtrl'
      });
}]);
