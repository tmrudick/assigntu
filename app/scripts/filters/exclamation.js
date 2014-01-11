angular.module('assigntu')
  .filter('exclamation', function() {
    return function(style) {
      switch (style) {
        case 'danger':
          return 'Uh-oh!';
        default:
          return 'Hurray!';
      }
    };
  });