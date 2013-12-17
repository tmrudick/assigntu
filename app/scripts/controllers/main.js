'use strict';

angular.module('assigntu')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.createList = function(name) {
      $location.path('/lists/' + name);
    };
  });
