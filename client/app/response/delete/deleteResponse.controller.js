'use strict';
const angular = require('angular');

/*@ngInject*/
export function deleteResponseController(Auth, $state, $http, $stateParams) {
  this.currentUser = Auth.getCurrentUserSync().name;
  this.$http = $http;
  this.$state = $state;
  this.$stateParams = $stateParams;

  this.entryId = this.$stateParams.id;

  this.$http.get('/api/responses/' + this.$stateParams.id)
  .then(response => {
    this.created = response.data.created;
    this.modified = response.data.modified;
    this.message = response.data.message;
    this.tags = response.data.tags;
  });

  this.deleteEntry = function(_id) {
    this.$http.delete('/api/responses/' + this.$stateParams.id)
    .then(response => {
      console.log(response.statusText);
      this.$state.go('promptResponseSuccess', { action: 'Delete', referrer: this.type});
    }, err => {
      console.log(err.statusText);
      this.$state.go('promptResponseError');
    });
  };
}

export default angular.module('ubaeApiApp.deleteResponse', [])
  .controller('DeleteResponseController', deleteResponseController)
  .name;
