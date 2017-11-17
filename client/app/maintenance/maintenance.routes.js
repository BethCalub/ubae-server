'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('maintenance', {
      url: '/maintenance',
      template: '<maintenance></maintenance>'
    })
    .state('createEntry', {
      // url: '/maintenance/create',
      template: require('./createEntry/createEntry.html'),
      controller: 'CreateEntryController',
      controllerAs: 'createEntryCtrl',
      authenticate: true
    })
    .state('editEntry', {
      // url: '/maintenance/edit',
      template: require('./editEntry/editEntry.html'),
      controller: 'EditEntryController',
      controllerAs: 'editEntryCtrl',
      authenticate: true
    })
    .state('promptSuccess', {
      // url: '/maintenance/success',
      template: require('./prompt/success.html')
    })
    .state('promptError', {
      // url: '/maintenance/failed',
      template: require('./prompt/failed.html')
    });
}
