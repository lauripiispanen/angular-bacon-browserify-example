var angular = require('angular-bacon');
var module_name = 'my.directives';

angular
    .module(module_name, ['angular-bacon'])
    .directive('baconDirective', require('./sample_directive'));

module.exports = module_name;