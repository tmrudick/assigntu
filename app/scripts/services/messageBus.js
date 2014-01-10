angular.module('assigntu')
  .factory('MessageBus', function() {
    var messages = [];
    return {
      push: function(message, style) {
        messages.push({
          message: message,
          style: style
        });
      },
      pop: function() {
        if (messages.length) {
          return messages.pop();
        } else {
          return null;
        }
      }
    };
  });