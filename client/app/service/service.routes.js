'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('service', {
      url: '/service',
      template: '<service></service>'
    });
}
