'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './feedback.routes';

export class FeedbackComponent {
  /*@ngInject*/
  constructor(Auth, $http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.link = '/api/feedbacks';
    this.showNotif = false;
    this.currentUser = Auth.getCurrentUserSync().name;

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
      // 'All Entries': '',
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
    this.$http.get(this.link)
    .then(response => {
      this.entryList = response.data;
      this.socket.syncUpdates('feedback', this.entryList);
      this.eventStatus = 'Data Loaded Succesfully';
    }, err => {
      this.eventStatus = 'Loading Failed';
      this.error = err.statusText;
    });
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

  // ARCHIVE ENTRY
  archiveEntry(_id) {
    this.$http.put(this.link + '/' + _id, {
      resolved: true,
      timestamp: new Date(Date.now()),
      author: this.currentUser
    })
    .then(response => {
      this.eventStatus = 'Inquery Resolved';
    }, err => {
      this.eventStatus = 'Archiving Failed';
    });
    this.getEntries();
  }

  // DELETE ENTRY
  deleteEntry(_id) {
    this.$http.delete(this.link + '/' + _id)
    .then(response => {
      this.eventStatus = 'Entry Deleted Successfully';
      this.resetResponse();
    }, err => {
      this.eventStatus = 'Deleting Failed';
    });
    // this.getEntries();
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
