'use strict';
const angular = require('angular');

export default angular.module('ubaeApiApp.statusbar', [])
  .directive('statusbar', function() {
    return {
      template: require('./statusbar.html'),
      restrict: 'EA',
      scope: {
        tableEntries: '@',
        tableName: '@',
        actionMessage: '@'
      },
      replace: true,
      link: function(scope, element, attrs) {}
    };
  })
  .name;
