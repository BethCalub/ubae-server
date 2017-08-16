'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('response', {
      url: '/response',
      template: '<response></response>'
    });
}
