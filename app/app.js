// angular
import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';

// controllers
import AuthCtrl from './auth/auth.controller';
import PostCtrl from './posts/posts.controller';

// services
import AuthService from './auth/auth.service';
import PostService from './posts/posts.service';

// directives

angular.module('my-app', [angularMaterialize, uiRouter])
.controller('AuthCtrl', AuthCtrl)
.controller('PostCtrl', PostCtrl)
.service('authService', AuthService)
.service('PostService', PostService)
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
