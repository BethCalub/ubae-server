'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './service.routes';

export class ServiceComponent {
  entryList = [];

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.link = '/api/services';
    this.showNotif = false;

    this.tableName = 'Services';
    this.tableEntries = ['#', 'Service', 'Info', 'Process', 'Requirements', 'Tags'];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('service');
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
      this.socket.syncUpdates('service', this.entryList);
    }, err => {
      this.error = err.statusText;
    });
  }

}

export default angular.module('ubaeApiApp.service', [uiRouter])
  .config(routes)
  .component('service', {
    template: require('./service.html'),
    controller: ServiceComponent,
    controllerAs: 'serviceCtrl'
  })
  .name;
