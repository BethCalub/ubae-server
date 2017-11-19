'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('response', {
      url: '/response',
      template: '<response></response>',
      authenticate: true
    })
    .state('createResponse', {
      url: '/response/create',
      template: require('./create/createResponse.html'),
      controller: 'CreateResponseController',
      controllerAs: 'createResponseCtrl',
      authenticate: true,
      params: {
        type: ''
      }
    })
    .state('editResponse', {
      url: '/response/edit',
      template: require('./edit/editResponse.html'),
      controller: 'EditResponseController',
      controllerAs: 'editResponseCtrl',
      authenticate: true,
      params: {
        id: null
      }
    });
}
