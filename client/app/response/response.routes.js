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
    })
    .state('archiveResponse', {
      url: '/response/archive/:id',
      template: require('./archive/archiveResponse.html'),
      controller: 'ArchiveResponseController',
      controllerAs: 'archiveResponseCtrl',
      authenticate: true,
      params: {
        id: null
      }
    })
    .state('restoreResponse', {
      url: '/response/restore/:id',
      template: require('./restore/restoreResponse.html'),
      controller: 'RestoreResponseController',
      controllerAs: 'restoreResponseCtrl',
      authenticate: true,
      params: {
        id: null
      }
    })
    .state('deleteResponse', {
      url: '/response/delete/:id',
      template: require('./delete/deleteResponse.html'),
      controller: 'DeleteResponseController',
      controllerAs: 'deleteResponseCtrl',
      authenticate: true,
      params: {
        id: null
      }
    })
    .state('promptResponseSuccess', {
      // url: '/response/success',
      template: require('./prompt/success.html'),
      controller: 'PromptResponseController',
      controllerAs: 'promptResponseCtrl',
      params: {
        action: 'Action',
        referrer: 'main'
      }
    })
    .state('promptResponseError', {
      // url: '/response/failed',
      template: require('./prompt/failed.html')
    });
}
