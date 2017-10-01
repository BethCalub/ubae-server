'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './provider.routes';

export class ProviderComponent {
  entryList = [];
  
  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.link = '/api/providers';

    this.tableName = 'Information';
    this.tableEntries = ['#', 'Name', 'Provider', 'Message', 'Tags'];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('provider');
    });
  }

  $onInit() {
    this.$http.get(this.link)
    .then(response => {
      this.entryList = response.data;
      this.socket.syncUpdates('provider', this.entryList);
      this.eventStatus = 'Data Successfully Loaded';
    }, err => {
      this.error = err.statusText;
    });
  }
}

export default angular.module('ubaeApiApp.provider', [uiRouter])
  .config(routes)
  .component('provider', {
    template: require('./provider.html'),
    controller: ProviderComponent,
    controllerAs: 'providerCtrl'
  })
  .name;
