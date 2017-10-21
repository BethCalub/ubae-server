'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './development.routes';

export class DevelopmentComponent {

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates(this.endpoint.socket);
    });
  }

  //onLoad
  $onInit() {
    this.eventStatus = 'Loading...';
    this.$http.get(this.endpoint.link)
    .then(response => {
      this.entryList = response.data;
      this.socket.syncUpdates(this.endpoint.socket, this.entryList);
      this.eventStatus = this.status.data.success;
      console.log(response.statusText);
    }, err => {
      this.eventStatus = this.status.data.error;
      console.log(err.statusText);
    });
  }
}

export default angular.module('ubaeApiApp.development', [uiRouter])
  .config(routes)
  .component('development', {
    template: require('./development.html'),
    controller: DevelopmentComponent,
    controllerAs: 'developmentCtrl'
  })
  .name;
