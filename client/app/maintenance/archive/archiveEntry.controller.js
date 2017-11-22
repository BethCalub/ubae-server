'use strict';
const angular = require('angular');

/*@ngInject*/
export function archiveEntryController(Auth, $state, $http, $stateParams) {
  this.currentUser = Auth.getCurrentUserSync().name;
  this.$http = $http;
  this.$state = $state;
  this.$stateParams = $stateParams;

  this.entryId = this.$stateParams.id;

  this.$http.get('/api/informations/' + this.$stateParams.id)
  .then(response => {
    this.entryName = response.data.name;
    this.created = response.data.created;
    this.modified = response.data.modified;
    this.startDate = response.data.startDate;
    this.endDate = response.data.endDate;
    this.details = response.data.details;
    this.message = response.data.message;
    this.tags = response.data.tags;
    this.type = response.data.type;
  });

  this.archiveEntry = function() {
    this.$http.put('/api/informations/' + this.$stateParams.id, {
      active: false,
      archived: {
        author: this.currentUser,
        date: new Date(Date.now())
      }
    })
      .then(response => {
        console.log(response.statusText);
        this.$state.go('promptSuccess', { action: 'Archive', referrer: this.type});
      }, err => {
        console.log(err.statusText);
        this.$state.go('promptError');
      });
  };
}

export default angular.module('ubaeApiApp.archiveEntry', [])
  .controller('ArchiveEntryController', archiveEntryController)
  .name;
