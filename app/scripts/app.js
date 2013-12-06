'use strict';

angular.module('assigntu', [
  'assigntu.lists',
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
        templateUrl: 'views/lists/show.html',
        controller: 'ListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
