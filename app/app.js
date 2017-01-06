// angular
import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';

// controllers
import AuthCtrl from './auth/auth.controller';
import CommentsCtrl from './comments/comments.controller';
import DashCtrl from './dash/dash.controller';
import FavoriteCtrl from './favorites/favorite.controller';
import PostCtrl from './posts/posts.controller';
import SignUpCtrl from './signup/signup.controller';
import UserCtrl from './users/user.controller';

// services
import AuthService from './auth/auth.service';
import CommentsService from './comments/comments.service';
import FollowService from './follow/follow.service';
import PostService from './posts/posts.service';
import SignUpService from './signup/signup.service';
import UserService from './users/user.service';

// directives
import favorite from './favorites/favorite.directive';

angular.module('my-app', [angularMaterialize, uiRouter])
.controller('AuthCtrl', AuthCtrl)
.controller('CommentsCtrl', CommentsCtrl)
.controller('DashCtrl', DashCtrl)
.controller('FavoriteCtrl', FavoriteCtrl)
.controller('UserCtrl', UserCtrl)
.controller('PostCtrl', PostCtrl)
.controller('SignUpCtrl', SignUpCtrl)
.service('authService', AuthService)
.service('commentsService', CommentsService)
.service('followService', FollowService)
.service('PostService', PostService)
.service('SignUpService', SignUpService)
.service('userService', UserService)
.directive('gsFavorite', favorite)
.config(['$stateProvider', ($stateProvider) => {
  $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'views/home.html',
        controller: 'PostCtrl',
        controllerAs: 'postCtrl'
      })
      .state('home.inspiration', {
        url: '/inspiration',
        templateUrl: 'partial-home-inspiration.html',
        controller: 'PostCtrl',
        controllerAs: 'postCtrl'
      })
      .state('home.showandtell', {
        url: '/showandtell',
        templateUrl: 'partial-home-showandtell.html',
        controller: 'PostCtrl',
        controllerAs: 'postCtrl'
      })
      .state('home.resources', {
        url: '/resources',
        templateUrl: 'partial-home-resources.html',
        controller: 'PostCtrl',
        controllerAs: 'postCtrl'
      })
      .state('singlepost', {
        url: '/singlepost',
        templateUrl: 'views/singlepost.html',
        controller: 'PostCtrl',
        controllerAs: 'postCtrl'
      })
      .state('dash', {
        url: '/dash',
        templateUrl: 'views/dash.html',
        controller: 'UserCtrl',
        controllerAs: 'userCtrl'
      });
}]);
