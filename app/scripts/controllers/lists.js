'use strict';

angular.module('assigntu')
  .controller('ListCtrl', function($scope, $routeParams, $firebase) {
    var listId = $routeParams.id;

    // Link the list on the scope to firebase
    $scope.list = $firebase(new Firebase('https://assigntu.firebaseio.com/lists/' + listId));
    $scope.list.$bind($scope, 'remote');

    $scope.newItem = function() {
      if (!$scope.remote.items) {
        $scope.remote.items = [];
      }

      $scope.remote.items.push({
        text: $scope.item,
        completed: false
      });

      $scope.item = null;
    };

    $scope.remove = function(index) {
      $scope.remote.items.splice(index, 1);
      return false;
    };
  });
