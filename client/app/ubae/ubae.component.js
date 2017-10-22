'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');

import routes from './ubae.routes';

export class UbaeComponent {
  /*@ngInject*/
  constructor($http, $scope, socket, $anchorScroll, $location) {
    this.$http = $http;
    this.socket = socket;
    this.chatData = [];

    this.$anchorScroll = $anchorScroll;
    this.$location = $location;
    this.$anchorScroll.yOffset = 1000;

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
        this.socket.syncUpdates('ubae', this.ubaeResults);
      });
  }

  scrollTo(_id) {
    this.$location.hash(_id);
    this.$anchorScroll();
  }

  ubaeSearch(inquiry) {
    this.chatData.push({role: 'user', msg: inquiry, timestamp: new Date(Date.now())});
    if(inquiry) {
      this.$http.get('/api/ubae/use?i=' + inquiry)
      .then(response => {
        this.chatData.push({role: 'ubae', msg: response.data.result._say, timestamp: new Date(Date.now())});
        // this.ubaeResults = response.data;
        this.scrollTo('here');
        this.inquiry = '';
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
