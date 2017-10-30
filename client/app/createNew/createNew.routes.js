'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('createNew', {
      url: '/maintenance/new',
      template: '<create-new></create-new>',
      authenticate: true
    });
}
