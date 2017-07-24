'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('ubae', {
      url: '/',
      template: '<ubae></ubae>'
    });
}
