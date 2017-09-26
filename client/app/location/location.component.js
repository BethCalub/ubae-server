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

    this.tableName = 'Locations';
    this.tableEntries = ['#', 'Name', 'Location', 'Message', 'Tags'];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('location');
    });
  }

  $onInit() {
    this.$http.get(this.link)
    .then(response => {
      this.entryList = response.data;
      this.socket.syncUpdates('location', this.entryList);
      this.eventStatus = 'Data Successfully Loaded';
    }, err => {
      this.error = err.statusText;
    });
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

  // ARCHIVE ENTRY
  archiveEntry(_id) {
    this.$http.put(this.link + '/' + _id, {
      resolved: true
    })
    .then(response => {
      this.eventStatus = 'Archived Succesfully';
    }, err => {
      this.eventStatus = 'Archiving Failed';
    });
    this.getEntries();
  }

  // DELETE ENTRY
  deleteEntry(_id) {
    this.$http.delete(this.link + '/' + _id)
    .then(response => {
      this.eventStatus = 'Entry Deleted Successfully';
      this.resetResponse();
    }, err => {
      this.eventStatus = 'Deleting Failed';
    });
    this.getEntries();
    this.resetResponse();
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
