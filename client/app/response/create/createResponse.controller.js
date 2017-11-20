'use strict';
const angular = require('angular');

/*@ngInject*/
export function createResponseController(Auth, $http, $state) {
  this.currentUser = Auth.getCurrentUserSync().name;
  this.$http = $http;
  this.$state = $state;

  this.createEntry = function() {
    var entry = {
      message: this.message,
      tags: this.tags,
      author: this.currentUser,
      date: new Date(Date.now())
    };

    this.$http.post('/api/responses/', entry)
      .then(response => {
        this.resetForm();
        console.log(response.statusText);
        this.$state.go('promptResponseSuccess');
      }, err => {
        this.$state.go('promptResponseError');
        console.log(err.statusText);
      });
  };

  this.resetForm = function() {
    this.message = '';
    this.tags = '';
  };
}

export default angular.module('ubaeApiApp.createResponse', [])
  .controller('CreateResponseController', createResponseController)
  .name;
