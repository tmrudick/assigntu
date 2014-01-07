angular.module('assigntu')
    .factory('idFactory', function() {
        return function(length) {
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
                id = '';

            while (id.length < length) {
                id += characters[Math.floor(Math.random() * characters.length)];
            }

            return id;
        };
    });