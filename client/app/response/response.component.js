'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './response.routes';

export class ResponseComponent {
  responseList = [];
  tableName = 'Responses';

  message = '';
  type = 'General';
  tags = '';
  active = true;

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('response');
    });
  }

  $onInit() {
    this.$http.get('/api/responses')
      .then(response => {
        this.responseList = response.data;
        this.socket.syncUpdates('response', this.responseList);
      });
  }

  getResponse(_id) {
    this.$http.get('/api/responses/' + _id)
      .then(response => {
        this.message = response.data.message;
        this.type = response.data.type;
        this.tags = response.data.tags;
      });
  }

  addResponse() {
    this.$http.post('/api/responses', {
      message: this.message,
      type: this.type,
      tags: this.tags
    });
    this.message = '';
    this.type = 'General';
    this.tags = '';
    this.active = true;
  }

  deleteResponse(response) {
    this.$http.delete('/api/responses/' + response);
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
