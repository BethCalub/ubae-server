'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './response.routes';

export class ResponseComponent {
  responseList = [];
  tableName = 'Responses';
  searchResponses = '';

  responseId = '';
  message = '';
  type = 'General';
  tags = '';
  active = true;

  responseEntities = {
    message: this.message,
    type: this.type,
    tags: this.tags.split(', ')
  }

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.typeSelect = ['General', 'Error', 'Help'];
    this.link = '/api/responses';
    this.filterType = 'General';
    this.isCollapsed = false;

    this.responseId = '';
    this.message = '';
    this.type = 'General';
    this.tags = '';
    this.active = true;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('response');
    });
  }

  $onInit() {
    this.getResponses();
  }

  setResponseEntry() {
    var responseArray = {
      message: this.message,
      type: this.type,
      tags: this.getTags(this.tags)
    };
    return responseArray;
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

  getResponses() {
    this.$http.get(this.link)
    .then(response => {
      this.responseList = response.data;
      this.socket.syncUpdates('response', this.responseList);
    });
  }

  getResponse(_id) {
    this.$http.get(this.link + '/' + _id)
      .then(response => {
        this.message = response.data.message;
        this.type = response.data.type;
        this.tags = response.data.tags;
        this.responseId = response.data._id;
      });
  }

  saveResponse() {
    if(this.responseId) {
      this.updateResponse(this.responseId);
    } else {
      this.addResponse();
    }
    this.resetResponse();
    this.getResponses();
  }

  addResponse() {
    this.$http.post(this.link, this.setResponseEntry());
  }

  updateResponse(_id) {
    this.$http.put(this.link + '/' + _id,
      this.setResponseEntry()
    );
  }

  deleteResponse(_id) {
    this.$http.delete(this.link + '/' + _id);
    this.resetResponse();
  }

  resetResponse() {
    this.message = '';
    this.type = 'General';
    this.tags = '';
    this.active = true;
    this.responseId = '';
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
