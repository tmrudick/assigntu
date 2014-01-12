'use strict';

angular.module('assigntu', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lists/:id', {
        templateUrl: 'views/lists/show.html',
        controller: 'ListCtrl'
      })
      .when('/lists/:id/edit', {
        templateUrl: 'views/lists/edit.html',
        controller: 'EditListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
