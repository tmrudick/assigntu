angular.module('assigntu')
  .filter('unassigned', function() {
    return function(name) {
      if (!name) {
        return 'unassigned';
      }

      return name;
    }
  });