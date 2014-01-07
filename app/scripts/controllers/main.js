'use strict';

angular.module('assigntu')
  .controller('MainCtrl', function ($scope, $location, $http) {
    $scope.createList = function(name) {
      // Create the new list just using http

      $http.post('https://assigntu.firebaseio.com/lists/' + name, { name: name, first: true }).then(function() {
        $location.path('/lists/' + name);
      });
    };
  });
