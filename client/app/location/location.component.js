'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './location.routes';

export class LocationComponent {
  entryList = [];

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.link = '/api/locations';
    this.showNotif = false;

    this.tableName = 'Locations';
    this.tableEntries = ['#', 'Location', 'Building', 'Floor', 'Room', 'Tags'];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('location');
    });
  }

  $onInit() {
    this.getEntries();
  }

  // GET ALL ENTRIES
  getEntries() {
    this.$http.get(this.link)
    .then(response => {
      this.entryList = response.data;
      this.socket.syncUpdates('location', this.entryList);
    }, err => {
      this.error = err.statusText;
    });
  }

}

export default angular.module('ubaeApiApp.location', [uiRouter])
  .config(routes)
  .component('location', {
    template: require('./location.html'),
    controller: LocationComponent,
    controllerAs: 'locationCtrl'
  })
  .name;
