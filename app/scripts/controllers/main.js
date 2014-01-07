'use strict';

angular.module('assigntu')
  .controller('MainCtrl', ['$scope', '$location', '$firebase', 'idFactory', function ($scope, $location, $firebase, identityFactory) {
    $scope.createList = function(name) {
      // Create a new list identifier
      var listId = identityFactory(5);

      // Link the list on the scope to firebase
      $scope.list = $firebase(new Firebase('https://assigntu.firebaseio.com/lists/' + id));

      // When we see a change event, redirect to the new list page
      $scope.list.$on('change', function() {
        $location.path('/lists/' + listId);
      });

      // Set the value of the new list
      $scope.list.$set({ id: listId, name: name, first: true })
    };
  }]);
