'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './information.routes';

export class InformationComponent {
  entryList = [];
  
  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.link = '/api/informations';

    
    this.archived = 'true';
    this.archiveType = {
      'All Entries': '',
      'Active Entries': 'true',
      Archived: 'false'
    };

    this.tableName = 'Information';
    this.tableEntries = ['#', 'Information', 'Details', 'Message', 'Tags'];
    this.tableInfo = false;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('event');
    });
  }

  closeAlert() {
    this.tableInfo = true;
  }

  $onInit() {
    this.$http.get(this.link)
    .then(response => {
      this.entryList = response.data;
      this.socket.syncUpdates('information', this.entryList);
      this.eventStatus = 'Data Successfully Loaded';
    }, err => {
      this.eventStatus = 'Data Failed to Load';
      this.error = err.statusText;
    });
  }

  getEntries() {
    this.$http.get(this.link)
    .then(response => {
      this.entryList = response.data;
      this.socket.syncUpdates('information', this.entryList);
    }, err => {
      this.error = err.statusText;
    });
  }

  archiveEntry(_id) {
    this.eventStatus = 'Processing...';
    this.$http.put(this.link + '/' + _id, {
      active: false
    })
    .then(response => {
      // this.getEntries();
      this.eventStatus = response.statusText + 'Entry Successfully Archived';
    }, err => {
      // this.getEntries();
      this.eventStatus = 'Archive Unsuccessful';
    });
  }

  UnarchiveEntry(_id) {
    this.eventStatus = 'Processing...';
    this.$http.put(this.link + '/' + _id, {
      active: true
    })
    .then(response => {
      // this.getEntries();
      this.eventStatus = response.statusText + 'Entry Successfully Restored';
    }, err => {
      // this.getEntries();
      this.eventStatus = 'Restored Unsuccessful';
    });
  }

  deleteEntry(_id) {
    this.eventStatus = 'Processing...';
    this.$http.delete(this.link + '/' + _id)
    .then(response => {
      this.eventStatus = 'Entry Successfully Deleted';
    }, err => {
      this.eventStatus = 'Delete Unsuccessful';
    });
  }
}

export default angular.module('ubaeApiApp.information', [uiRouter])
  .config(routes)
  .component('information', {
    template: require('./information.html'),
    controller: InformationComponent,
    controllerAs: 'informationCtrl'
  })
  .name;
