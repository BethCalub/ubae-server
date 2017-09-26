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

    this.commandType = '';

    this.cmdSelect = {
      'All Commands': '',
      What: 'WHAT',
      When: 'WHEN',
      Where: 'WHERE',
      How: 'HOW',
      Which: 'WHICH'
    };

    this.resolvedType = 'false';

    this.resolvedSelect = {
      'All Entries': '',
      Resolved: 'true',
      Unresolved: 'false',
    };

    this.tableName = 'Feedback';
    this.tableEntries = ['#', 'User Inquiry', 'Command', 'Tags', 'Date', 'Time', 'Resolved'];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('feedback');
    });
  }

  $onInit() {
    this.getEntries();
  }

  setNotif(_msg, response, _alert) {
    this.showNotif = true;
    return {
      message: _msg,
      code: response.status,
      status: response.statusText,
      alert: _alert
    };
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

  archiveEntry(_id) {
    this.$http.put(this.link + '/' + _id, {
      resolved: true
    })
    .then(response => {
      this.eventStatus = this.setNotif('Updated Successfully!', response, 'alert-success');
    }, err => {
      this.eventStatus = this.setNotif('Updating Failed!', err, 'alert-danger');
    });
    this.getEntries();
  }

  // DELETE ENTRY
  deleteEntry(_id) {
    this.$http.delete(this.link + '/' + _id)
    .then(response => {
      this.eventStatus = this.setNotif('Deleted Successfully!', response, 'alert-success');
      this.resetResponse();
    }, err => {
      this.eventStatus = this.setNotif('Deleting Failed!', err, 'alert-danger');
    });
    this.resetResponse();
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
