'use strict';

angular.module('assigntu')
  .filter('exclamation', function() {
    return function(style) {
      switch (style) {
        case 'danger':
          return 'Uh-oh!';
        case 'warning':
          return 'Whoops!';
        default:
          return 'Hurray!';
      }
    };
  });