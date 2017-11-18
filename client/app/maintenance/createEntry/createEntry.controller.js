'use strict';
const angular = require('angular');

/*@ngInject*/
export function createEntryController(Auth, $http, $state) {
  this.currentUser = Auth.getCurrentUserSync().name;
  this.$http = $http;
  this.$state = $state;

  this.details = [];

  this.searchResult = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4'
  ];

  this.type = '';
  this.typeSelect = {
    'Select a Type': '',
    Information: 'WHAT',
    Event: 'WHEN',
    Location: 'WHERE',
    Instruction: 'HOW',
    Provider: 'WHICH'
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

  this.setEndDateMin = function() {
    this.endDatePicker.datepickerOptions.minDate = new Date(this.startDate);
  };

  this.setStartDateMax = function() {
    this.startDatePicker.datepickerOptions.maxDate = new Date(this.endDate);
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

  this.createEntry = function() {
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

    this.$http.post('/api/informations/', entry)
      .then(response => {
        this.resetForm();
        console.log(response.statusText);
        this.$state.go('promptSuccess');
      }, err => {
        this.$state.go('promptError');
        console.log(err.statusText);
      });
  };

  this.resetForm = function() {
    this.entryName = '';
    this.startDate = '';
    this.endDate = '';
    this.details = [];
    this.detail = '';
    this.message = '';
    this.tags = '';
    this.type = '';
  };
}

export default angular.module('ubaeApiApp.createEntry', [])
  .controller('CreateEntryController', createEntryController)
  .name;
