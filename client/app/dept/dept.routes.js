'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('dept', {
      url: '/dept',
      template: '<dept></dept>'
    });
}
