'use strict';

angular.module('assigntu')
  .factory('MessageBus', function() {
    var messageQueue = [];

    var messages = {
      'first-run': 'Welcome to your new list! Bookmark and share this URL!',
      'list-saved': 'Changes saved!'
    };

    return {
      push: function(idOrMessage, style) {
        messageQueue.push({
          message: messages[idOrMessage] || idOrMessage,
          style: style
        });
      },
      pop: function() {
        if (messageQueue.length) {
          return messageQueue.pop();
        } else {
          return null;
        }
      }
    };
  });