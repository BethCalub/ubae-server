'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('program', {
      url: '/program',
      template: '<program></program>',
      authenticate: true
    });
}
