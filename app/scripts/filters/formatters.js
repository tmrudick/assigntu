angular.module('assigntu')
  .filter('assigned', function() {
    return function(name) {
      if (!name) {
        return 'unassigned';
      }

      return name;
    }
  });