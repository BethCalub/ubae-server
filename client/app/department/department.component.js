'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './department.routes';

export class DepartmentComponent {
  entryList = [];

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.link = '/api/departments';
    this.showNotif = false;

    this.tableName = 'Departments';
    this.tableEntries = ['#', 'Department', 'Acronym', 'Info', 'Type', 'Tags'];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('department');
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
      this.socket.syncUpdates('department', this.entryList);
    }, err => {
      this.error = err.statusText;
    });
  }

}

export default angular.module('ubaeApiApp.department', [uiRouter])
  .config(routes)
  .component('department', {
    template: require('./department.html'),
    controller: DepartmentComponent,
    controllerAs: 'departmentCtrl'
  })
  .name;
