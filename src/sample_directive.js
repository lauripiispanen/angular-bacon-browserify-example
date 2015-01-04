require('angular-bacon');
var Bacon = require('baconjs');

module.exports = [function() {
    return {
        controller: function($scope) {
            Bacon.interval(1000, 1).scan(0, function(a, b) {
                return a + b;
            }).digest($scope, "counter");
        },
        template: 'It works! Counter: {{counter}}'
    };
}]