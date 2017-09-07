'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './response.routes';

export class ResponseComponent {
  responseList = [];
  searchResponses = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.tableName = 'Responses';

    this.typeSelect = ['General', 'Error', 'Help'];
    this.link = '/api/responses';
    this.filterType = 'General';
    this.isCollapsed = false;
    this.showNotif = false;

    this.responseId = '';
    this.type = 'General';
    this.active = true;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('response');
    });
  }

  $onInit() {
    this.getResponses();
  }

  setResponseEntry() {
    return {
      message: this.message,
      type: this.type,
      tags: this.getTags(this.tags)
    };
  }

  resetResponse() {
    this.message = '';
    this.type = 'General';
    this.tags = '';
    this.active = true;
    this.responseId = '';
  }

  getTags(toArray) {
    var tagsArray = [];
    var trim = toArray.split(',');
    for(var z = 0; z < trim.length; z++) {
      var element = trim[z].trim();
      tagsArray.push(element);
    }
    return tagsArray;
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

  dismissNotif() {
    this.showNotif = false;
  }

  saveResponse() {
    if(this.responseId) {
      this.$http.put(this.link + '/' + this.responseId, {
        message: this.message,
        tags: this.tags.split(',')
      })
      .then(response => {
        this.eventStatus = this.setNotif('Updated Successfully!', response, 'alert-success');
        this.resetResponse();
        this.getResponses();
      }, err => {
        this.eventStatus = this.setNotif('Updating Failed!', err, 'alert-danger');
      });
    } else {
      this.$http.post(this.link, {
        message: this.message,
        tags: this.tags
      })
      .then(response => {
        this.eventStatus = this.setNotif('Added Successfully!', response, 'alert-success');
        this.resetResponse();
      }, err => {
        this.eventStatus = this.setNotif('Adding Failed!', err, 'alert-danger');
      });
    }
  }

  getResponses() {
    this.$http.get(this.link)
    .then(response => {
      this.responseList = response.data;
      this.socket.syncUpdates('response', this.responseList);
    }, err => {
      this.error = err.statusText;
    });
  }

  getResponse(_id) {
    this.$http.get(this.link + '/' + _id)
      .then(response => {
        this.message = response.data.message;
        this.type = response.data.type;
        this.tags = response.data.tags;
        this.responseId = response.data._id;
      }, err => {
        this.error = err.statusText;
      });
  }

  // DELETE RESPONSE
  deleteResponse(_id) {
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

export default angular.module('ubaeApiApp.response', [uiRouter])
  .config(routes)
  .component('response', {
    template: require('./response.html'),
    controller: ResponseComponent,
    controllerAs: 'responseCtrl'
  })
  .name;
