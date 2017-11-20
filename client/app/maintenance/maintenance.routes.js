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
        type: '',
        referrer: 'main'
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
    .state('archiveEntry', {
      url: '/maintenance/archive/:id',
      template: require('./archive/archiveEntry.html'),
      controller: 'ArchiveEntryController',
      controllerAs: 'archiveEntryCtrl',
      authenticate: true,
      params: {
        id: null
      }
    })
    .state('restoreEntry', {
      url: '/maintenance/restore/:id',
      template: require('./restore/restoreEntry.html'),
      controller: 'RestoreEntryController',
      controllerAs: 'restoreEntryCtrl',
      authenticate: true,
      params: {
        id: null
      }
    })
    .state('deleteEntry', {
      url: '/maintenance/delete/:id',
      template: require('./delete/deleteEntry.html'),
      controller: 'DeleteEntryController',
      controllerAs: 'deleteEntryCtrl',
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
      template: require('./prompt/success.html'),
      controller: 'PromptController',
      controllerAs: 'promptCtrl',
      params: {
        action: 'Action',
        referrer: 'main'
      }
    })
    .state('promptError', {
      // url: '/maintenance/failed',
      template: require('./prompt/failed.html')
    });
}
