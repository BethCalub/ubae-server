'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('provider', {
      url: '/provider',
      template: '<provider></provider>'
    });
}
