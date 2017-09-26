'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('instruction', {
      url: '/instruction',
      template: '<instruction></instruction>'
    });
}
