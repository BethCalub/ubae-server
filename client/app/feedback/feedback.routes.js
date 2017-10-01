'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('feedback', {
      url: '/',
      template: '<feedback></feedback>',
      authenticate: true
    });
}
