'use strict';
const angular = require('angular');

/*@ngInject*/
export function editEntryController(Auth, $http, $stateParams) {
  this.currentUser = Auth.getCurrentUserSync().name;
  this.$http = $http;
  this.$stateParams = $stateParams;

  this.earmix = this.$stateParams.id;

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

  this.type = '';
  this.typeSelect = {
    'Select a Type': '',
    Information: 'what',
    Event: 'when',
    Location: 'where',
    Instruction: 'how',
    Provider: 'which'
  };

  this.altInputFormats = ['M!/d!/yyyy'];
  this.startDatePicker = {
    isDatepickerOpen: false,
    datepickerOptions: {
      datepickerMode: 'day',
      showWeeks: true,
      startingDay: 0, // (0=Sunday, ..., 6=Saturday)
      minDate: new Date(Date.now()), // must be JS Date
      maxDate: null, // must be JS Date
      initDate: null // must be JS Date
    }
  };

  this.endDatePicker = {
    isDatepickerOpen: false,
    datepickerOptions: {
      datepickerMode: 'day',
      showWeeks: true,
      startingDay: 0, // (0=Sunday, ..., 6=Saturday)
      minDate: new Date(Date.now()), // must be JS Date
      maxDate: null, // must be JS Date
      initDate: null // must be JS Date
    }
  };

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
}

export default angular.module('ubaeApiApp.editEntry', [])
  .controller('EditEntryController', editEntryController)
  .name;
