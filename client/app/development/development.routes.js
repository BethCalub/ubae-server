'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('development', {
      url: '/development',
      template: '<development></development>'
    });
}
