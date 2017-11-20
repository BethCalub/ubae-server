'use strict';
const angular = require('angular');

/*@ngInject*/
export function archiveResponseController(Auth, $state, $http, $stateParams) {
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

  this.archiveEntry = function() {
    this.$http.put('/api/responses/' + this.$stateParams.id, {
      active: false,
      archived: {
        author: this.currentUser,
        date: new Date(Date.now())
      }
    })
      .then(response => {
        console.log(response.statusText);
        this.$state.go('promptResponseSuccess', { action: 'Archive', referrer: this.type});
      }, err => {
        console.log(err.statusText);
        this.$state.go('promptResponseError');
      });
  };
}

export default angular.module('ubaeApiApp.archiveResponse', [])
  .controller('ArchiveResponseController', archiveResponseController)
  .name;
