'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');

import routes from './ubae.routes';

export class UbaeComponent {
  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.socket = socket;
    this.url = 'localhost:3000/api';

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('ubae');
    });
  }

  $onInit() {
    this.$http.get('/api/ubae/use?i=')
      .then(response => {
        this.ubaeResults = response.data;
      });
    this.$http.get('/api/depts')
      .then(response => {
        this.ubaeDepts = response.data;
        this.socket.syncUpdates('dept', this.ubaeResults);
      });
  }

  uSearch() {
    if(this.ubaeQuery) {
      this.$http.get('/api/ubae/use?i=' + this.ubaeQuery)
      .then(response => {
        this.ubaeResults = response.data;
      });
    }
  }
}

export default angular.module('ubaeApiApp.ubae', [uiRouter])
  .config(routes)
  .component('ubae', {
    template: require('./ubae.html'),
    controller: UbaeComponent,
    controllerAs: 'ubaeCtrl'
  })
  .name;
