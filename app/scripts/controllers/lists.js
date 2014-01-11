'use strict';

angular.module('assigntu')
  .controller('ListCtrl', function($scope, $routeParams, $firebase, MessageBus) {
    var listId = $routeParams.id;

    $scope.flash = MessageBus.pop();

    // Link the list on the scope to firebase
    $scope.list = $firebase(new Firebase('https://assigntu.firebaseio.com/lists/' + listId));
    $scope.list.$bind($scope, 'remote');

    $scope.newItem = function() {
      if (!$scope.remote.items) {
        $scope.remote.items = [];
      }

      $scope.remote.items.push({
        timestamp: new Date(),
        text: $scope.item,
        completed: false,
        assigned: null
      });

      $scope.item = null;
    };

    // This will be raised by the item directive
    $scope.$on('remove-item', function(event, item) {
      var index = $scope.remote.items.indexOf(item);
      $scope.remote.items.splice(index, 1);
    })
  });
