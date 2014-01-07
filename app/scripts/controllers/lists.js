'use strict';

angular.module('assigntu')
  .controller('ListCtrl', function($scope, $routeParams, $firebase) {
    var listId = $routeParams.id;

    // Link the list on the scope to firebase
    $scope.list = $firebase(new Firebase('https://assigntu.firebaseio.com/lists/' + listId));

    $scope.newItem = function() {
      if (!$scope.list.items) {
        $scope.list.items = [];
      }

      $scope.list.items.push({
        text: $scope.item
      });

      $scope.item = null;
    };

    $scope.remove = function(index) {
      $scope.list.items.splice(index, 1);
      return false;
    };
  });
