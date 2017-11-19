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
      template: require('./create/createEntry.html'),
      controller: 'CreateEntryController',
      controllerAs: 'createEntryCtrl',
      authenticate: true,
      params: {
        type: ''
      }
    })
    .state('editEntry', {
      // url: '/maintenance/edit/:id',
      template: require('./edit/editEntry.html'),
      controller: 'EditEntryController',
      controllerAs: 'editEntryCtrl',
      authenticate: true,
      params: {
        id: null
      }
    })
    .state('viewEntries', {
      url: '/maintenance/view/:type',
      template: require('./entries/entries.html'),
      controller: 'EntriesController',
      controllerAs: 'entriesCtrl',
      authenticate: true,
      params: {
        type: ''
      }
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
