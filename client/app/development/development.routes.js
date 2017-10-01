'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('development', {
      url: '/',
      template: '<development></development>'
    });
}
