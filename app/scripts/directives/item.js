angular.module('assigntu')
  .directive('item', function() {
    return {
      restrict: 'E',
      scope: {
        'item': '='
      },
      templateUrl: 'views/directives/item.html'
    }
  });
