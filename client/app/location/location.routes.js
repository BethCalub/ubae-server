'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('location', {
      url: '/location',
      template: '<location></location>',
      authenticate: true
    });
}
