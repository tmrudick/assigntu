angular.module('assigntu')
  .directive('item', function() {
    return {
      restrict: 'E',
      scope: {
        'item': '='
      },
      templateUrl: 'views/directives/item.html',
      controller: ['$scope', function($scope) {
        $scope.removeItem = function(item) {
          $scope.$emit('remove-item', item);
        };
      }]
    }
  });
