'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './instruction.routes';

export class InstructionComponent {
  entryList = [];
  
  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.link = '/api/instructions';

    this.tableName = 'Information';
    this.tableEntries = ['#', 'Process', 'Instruction', 'Message', 'Tags'];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('event');
    });
  }

  $onInit() {
    this.$http.get(this.link)
    .then(response => {
      this.entryList = response.data;
      this.socket.syncUpdates('information', this.entryList);
      this.eventStatus = 'Data Successfully Loaded';
    }, err => {
      this.error = err.statusText;
    });
  }
}

export default angular.module('ubaeApiApp.instruction', [uiRouter])
  .config(routes)
  .component('instruction', {
    template: require('./instruction.html'),
    controller: InstructionComponent,
    controllerAs: 'instructionCtrl'
  })
  .name;
