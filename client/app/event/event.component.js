'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './event.routes';

export class EventComponent {
  entryList = [];

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.link = '/api/events';

    this.tableName = 'Events';
    this.tableEntries = ['#', 'Event', 'Info', 'Message', 'Start Date', 'End Date', 'Tags'];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('event');
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

}

export default angular.module('ubaeApiApp.event', [uiRouter])
  .config(routes)
  .component('event', {
    template: require('./event.html'),
    controller: EventComponent,
    controllerAs: 'eventCtrl'
  })
  .name;
