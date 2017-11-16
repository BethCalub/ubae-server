'use strict';
const angular = require('angular');

/*@ngInject*/
export function editEntryController(Auth, $http) {
  this.currentUser = Auth.getCurrentUserSync().name;
  this.$http = $http;

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

  this.resetForm = function() {
    this.entryName = 'hello';
    this.startDate = '';
    this.endDate = '';
    this.details = '';
    this.message = '';
    this.tags = '';
    this.type = 'WHAT';
  };
}

export default angular.module('ubaeApiApp.editEntry', [])
  .controller('EditEntryController', editEntryController)
  .name;
