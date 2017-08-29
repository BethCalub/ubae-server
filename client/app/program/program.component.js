'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './program.routes';

export class ProgramComponent {
  entryList = [];

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.link = '/api/programs';
    this.showNotif = false;

    this.tableName = 'Programs';
    this.tableEntries = ['#', 'Program', 'Acronym', 'Requirements', 'Type', 'Duration', 'Tags'];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('program');
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
      this.socket.syncUpdates('program', this.entryList);
    }, err => {
      this.error = err.statusText;
    });
  }

}

export default angular.module('ubaeApiApp.program', [uiRouter])
  .config(routes)
  .component('program', {
    template: require('./program.html'),
    controller: ProgramComponent,
    controllerAs: 'programCtrl'
  })
  .name;
