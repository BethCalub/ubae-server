'use strict';
const angular = require('angular');

/*@ngInject*/
export function editEntryController(Auth, $http, $state, $stateParams) {
  this.currentUser = Auth.getCurrentUserSync().name;
  this.$http = $http;
  this.$state = $state;
  this.$stateParams = $stateParams;

  this.entryID = this.$stateParams.id;

  this.$http.get('/api/informations/' + this.$stateParams.id)
  .then(response => {
    this.defaultValue = response.data;
    this.entryName = response.data.name;
    this.startDate = response.data.startDate;
    this.endDate = response.data.endDate;
    this.details = response.data.details;
    this.oldDetails = response.data.details;
    this.message = response.data.message;
    this.oldMessage = response.data.message;
    this.tags = response.data.tags;
    this.oldTags = response.data.tags;
    this.type = response.data.type;
  });

  this.addDetail = function(input) {
    if(input) {
      if(this.details.indexOf(input) > -1) {
        this.detailError = 'Detail already existing.';
        this.detailClass = 'text-warning';
        this.detail = '';
      } else {
        this.details.push(input);
        this.detailError = 'Successfully added!';
        this.detailClass = 'text-success';
        this.detail = '';
      }
    } else {
      this.detailError = 'Cannot add empty detail.';
      this.detailClass = 'text-danger';
      this.detail = '';
    }
  };

  this.deleteDetail = function(input) {
    if(this.details.indexOf(input) > -1) {
      this.details.splice(this.details.indexOf(input), 1);
      this.detailError = 'Successfully deleted!';
      this.detailClass = 'text-success';
      this.detail = '';
    }
  };

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
    this.$http.get('/api/informations/' + this.$stateParams.id)
    .then(response => {
      this.defaultValue = response.data;
      this.entryName = response.data.name;
      this.startDate = response.data.startDate;
      this.endDate = response.data.endDate;
      this.details = response.data.details;
      this.message = response.data.message;
      this.tags = response.data.tags;
      this.type = response.data.type;
    });
  };

  this.editEntry = function() {
    if(this.entryID) {
      var entry = {
        name: this.entryName,
        type: this.type,
        details: this.details,
        message: this.message,
        tags: this.tags,
        author: this.currentUser
      };
  
      if(this.startDate && this.endDate) {
        entry = {
          name: this.entryName,
          startDate: this.startDate,
          endDate: this.endDate,
          type: this.type,
          details: this.details,
          message: this.message,
          tags: this.tags,
          author: this.currentUser
        };
      }

      //Update entry
      this.$http.patch('/api/informations/' + this.entryID, entry)
      .then(response => {
        this.resetForm();
        console.log(response.statusText);
        this.$state.go('promptSuccess', { action: 'Updated', referrer: this.type});
      }, err => {
        this.$state.go('promptError');
        console.log(err.statusText);
      });
    }
  };
}

export default angular.module('ubaeApiApp.editEntry', [])
  .controller('EditEntryController', editEntryController)
  .name;
