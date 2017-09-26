'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('information', {
      url: '/information',
      template: '<information></information>'
    });
}
