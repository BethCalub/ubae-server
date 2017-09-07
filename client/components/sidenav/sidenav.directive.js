'use strict';
const angular = require('angular');

export default angular.module('ubaeApiApp.sidenav', [])
  .directive('sidenav', function() {
    return {
      template: require('./sidenav.html'),
      restrict: 'EA',
      link: function(scope, element, attrs) {}
    };
  })
  .name;
