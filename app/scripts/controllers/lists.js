'use strict';

angular.module('assigntu.lists', ['firebase'])
  .controller('ListsCtrl', function($scope, angularFire) {
    var ref = new Firebase('https://assigntu.firebaseio.com/lists');
    angularFire(ref.limit(15), $scope, 'lists');
  })
  .controller('ListCtrl', function($scope, $routeParams, angularFire) {
    var listId = $routeParams.id;

    $scope.list = {};
    var ref = new Firebase('https://assigntu.firebaseio.com/lists/' + listId);
    angularFire(ref, $scope, 'list');

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
  })
  .controller('NewListCtrl', function($scope) {
    $scope.list = {};
  });