'use strict';
const angular = require('angular');

/*@ngInject*/
export function editResponseController(Auth, $http, $state, $stateParams) {
  this.currentUser = Auth.getCurrentUserSync().name;
  this.$http = $http;
  this.$state = $state;
  this.$stateParams = $stateParams;

  this.entryID = this.$stateParams.id;

  this.$http.get('/api/responses/' + this.$stateParams.id)
  .then(response => {
    this.defaultValue = response.data;
    this.oldDetails = response.data.details;
    this.message = response.data.message;
    this.oldMessage = response.data.message;
    this.tags = response.data.tags;
    this.oldTags = response.data.tags;
  });

  this.addKeyword = function(input) {
    if(input) {
      if(this.tags.indexOf(input) > -1) {
        this.keywordError = 'Keyword already existing.';
        this.keywordClass = 'text-warning';
        this.keyword = '';
      } else {
        this.tags.push(input);
        this.keywordError = 'Successfully added!';
        this.keywordClass = 'text-success';
        this.keyword = '';
      }
    } else {
      this.keywordError = 'Cannot add empty keyword.';
      this.keywordClass = 'text-danger';
      this.keyword = '';
    }
  };

  this.deleteKeyword = function(input) {
    if(this.tags.indexOf(input) > -1) {
      this.tags.splice(this.tags.indexOf(input), 1);
      this.keywordError = 'Successfully deleted!';
      this.keywordClass = 'text-success';
      this.keyword = '';
    }
  };


  this.resetForm = function() {
    this.$http.get('/api/responses/' + this.$stateParams.id)
    .then(response => {
      this.message = response.data.message;
      this.tags = response.data.tags;
    });
  };

  this.editEntry = function() {
    if(this.entryID) {
      var entry = {
        message: this.message,
        tags: this.tags,
        author: this.currentUser
      };

      //Update entry
      this.$http.patch('/api/responses/' + this.entryID, entry)
      .then(response => {
        this.resetForm();
        console.log(response.statusText);
        this.$state.go('promptResponseSuccess');
      }, err => {
        this.$state.go('promptResponseError');
        console.log(err.statusText);
      });
    }
  };
}

export default angular.module('ubaeApiApp.editResponse', [])
  .controller('EditResponseController', editResponseController)
  .name;
