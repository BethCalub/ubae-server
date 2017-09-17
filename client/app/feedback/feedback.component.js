'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './feedback.routes';

export class FeedbackComponent {
  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.link = '/api/feedbacks';
    this.showNotif = false;

    this.tableName = 'Feedbacks';
    this.tableEntries = ['#', 'Inquiry', 'Command', 'Tags', 'Response', 'Date', 'Time', 'Resolved'];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('feedback');
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
      this.socket.syncUpdates('feedback', this.entryList);
    }, err => {
      this.error = err.statusText;
    });
  }

}

export default angular.module('ubaeApiApp.feedback', [uiRouter])
  .config(routes)
  .component('feedback', {
    template: require('./feedback.html'),
    controller: FeedbackComponent,
    controllerAs: 'feedbackCtrl'
  })
  .name;
