'use strict';

angular.module('assigntu', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lists', {
        templateUrl: 'views/lists/lists.html',
        controller: 'ListsCtrl'
      })
      .when('/lists/new', {
        templateUrl: 'views/lists/new.html',
        controller: 'NewListCtrl'
      })
      .when('/lists/:id', {
        templateUrl: 'views/show.html',
        controller: 'ListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
