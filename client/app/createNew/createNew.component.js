'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './createNew.routes';

export class CreateNewComponent {
  /*@ngInject*/
  constructor(Auth, $scope, $http, socket) {
    this.$http = $http;
    this.socket = socket;
    this.currentUser = Auth.getCurrentUserSync().name;
    this.now = new Date(Date.now());

    this.endpoint = {
      link: '/api/informations',
      socket: 'information'
    };

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
  }

  resetForm() {
    this.entryName = '';
    this.startDate = '';
    this.endDate = '';
    this.details = '';
    this.message = '';
    this.tags = '';
    this.type = '';
  }

  createEntry(form) {
    var entry = {
      name: this.entryName,
      // startDate: this.startDate,
      // endDate: this.endDate,
      type: this.type,
      details: this.details,
      message: this.message,
      tags: this.tags,
      author: 'Edgar'
      // added: this.now
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
        author: 'Edgar'
      };
    }

    this.$http.post(this.endpoint.link, {
      name: this.entryName,
      startDate: this.startDate,
      endDate: this.endDate,
      type: this.type,
      details: this.details,
      message: this.message,
      tags: this.tags,
      author: this.currentUser
    })
    .then(response => {
      this.resetForm();
      this.eventStatus = this.status.create.success;
      console.log(response.statusText);
      this.isCollapsed = false;
      form.$setPristine();
    }, err => {
      this.eventStatus = this.status.create.error;
      console.log(err.statusText);
    });
  }
}

export default angular.module('ubaeApiApp.createNew', [uiRouter])
  .config(routes)
  .component('createNew', {
    template: require('./createNew.html'),
    controller: CreateNewComponent,
    controllerAs: 'createNewCtrl'
  })
  .name;
