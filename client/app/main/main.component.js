import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  /*@ngInject*/
  constructor($http, $scope, socket, $window, $uibModal, $log, $document) {
    this.$http = $http;
    this.socket = socket;
    this.$uibModal = $uibModal;
    this.$document = $document;
    this.$log = $log;

    this.startDate = '';
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
    this.endDate = '';
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

    this.locations = '/api/locations';
    this.events = '/api/events';
    this.informations = '/api/informations';
    this.providers = '/api/providers';
    this.instructions = '/api/instructions';
    this.responses = '/api/responses';
    this.feedbacks = '/api/feedbacks';
    this.items = ['item1', 'item2', 'item3'];

    this.alertMe = function(message) {
      setTimeout(function() {
        $window.alert(message);
      });
    };
  }

  $onInit() {
    this.$http.get(this.locations)
    .then(response => {
      this.locationEntries = response.data;
      this.eventStatus = 'Locations Loaded';
      console.log(response.statusText);
    }, err => {
      this.eventStatus = 'Cannot Load Data';
      console.log(err.statusText);
    });

    this.$http.get(this.events)
    .then(response => {
      this.eventEntries = response.data;
      this.eventStatus = 'Locations Loaded';
      console.log(response.statusText);
    }, err => {
      this.eventStatus = 'Cannot Load Data';
      console.log(err.statusText);
    });

    this.$http.get(this.informations)
    .then(response => {
      this.informationEntries = response.data;
      this.eventStatus = 'Locations Loaded';
      console.log(response.statusText);
    }, err => {
      this.eventStatus = 'Cannot Load Data';
      console.log(err.statusText);
    });

    this.$http.get(this.providers)
    .then(response => {
      this.providerEntries = response.data;
      this.eventStatus = 'Locations Loaded';
      console.log(response.statusText);
    }, err => {
      this.eventStatus = 'Cannot Load Data';
      console.log(err.statusText);
    });

    this.$http.get(this.instructions)
    .then(response => {
      this.instructionEntries = response.data;
      this.eventStatus = 'Locations Loaded';
      console.log(response.statusText);
    }, err => {
      this.eventStatus = 'Cannot Load Data';
      console.log(err.statusText);
    });

    this.$http.get(this.responses)
    .then(response => {
      this.responseEntries = response.data;
      this.eventStatus = 'Locations Loaded';
      console.log(response.statusText);
    }, err => {
      this.eventStatus = 'Cannot Load Data';
      console.log(err.statusText);
    });

    this.$http.get(this.feedbacks)
    .then(response => {
      this.feedbackEntries = response.data;
      this.eventStatus = 'Locations Loaded';
      console.log(response.statusText);
    }, err => {
      this.eventStatus = 'Cannot Load Data';
      console.log(err.statusText);
    });
  }
}

export default angular.module('ubaeApiApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
