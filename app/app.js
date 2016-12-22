import angular from 'angular';
import angularMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

// controllers
import AuthCtrl from './auth/auth.controller';

// services
import AuthService from './auth/auth.service';

// directives

angular.module('my-app', ['angularMaterial', 'uiRouter'])
.controller('AuthCtrl', AuthCtrl)
.service('authService', AuthService)
.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('auth', {
        url: '',
        templateUrl: 'views/auth.html',
        controller: 'AuthCtrl',
        controllerAs: 'authCtrl'
      });
  }]);
