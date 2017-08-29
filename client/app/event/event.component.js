'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './event.routes';

export class EventComponent {
  eventList = [];

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.link = '/api/events';
    this.showNotif = false;

    this.tableName = 'Events';
    this.tableEntries = ['#', 'Event', 'Information', 'Location', 'Date', 'Tags'];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('event');
    });
  }

  $onInit() {
    this.getEvents();
  }

  setEvent() {
    return {
      name: this.eventName,
      info: this.eventInfo,
      location: this.eventLocation,
      requirements: this.eventRequirements,
      startDate: Date.parse(this.eventStartDate),
      endDate: Date.parse(this.eventEndDate),
      startTime: Date.parse(this.eventStartTime),
      endTime: Date.parse(this.eventEndTime),
      tags: this.eventTags
    };
  }

  clearEvent() {
    this.eventName = '';
    this.eventInfo = '';
    this.eventLocation = '';
    this.eventRequirements = '';
    this.eventStartDate = '';
    this.eventEndDate = '';
    this.eventStartTime = '';
    this.eventEndTime = '';
    this.eventTags = '';
  }

  setNotif(_msg, response, _alert) {
    this.showNotif = true;
    return {
      message: _msg,
      status: response.statusText,
      alert: _alert
    };
  }

  dismissNotif() {
    this.showNotif = false;
  }

  saveEvent() {
    if(this.eventId) {
      this.editEvent(this.eventId);
      this.getEvents();
      this.clearEvent();
    } else {
      this.addEvent();
      this.clearEvent();
    }
  }

  // GET ALL EVENTS
  getEvents() {
    this.$http.get(this.link)
    .then(response => {
      this.eventList = response.data;
      this.socket.syncUpdates('event', this.eventList);
    }, err => {
      this.error = err.statusText;
    });
  }

  // GET A SINGLE EVENT
  getEvent(_id) {
    this.$http.get(this.link + '/' + _id)
    .then(response => {
      this.eventDetail = response.data;
      this.eventId = this.eventDetail._id;
      this.eventName = this.eventDetail.name;
      this.eventInfo = this.eventDetail.info;
      this.eventLocation = this.eventDetail.location;
      this.eventRequirements = this.eventDetail.requirements;
      this.eventStartDate = this.eventDetail.startDate;
      this.eventEndDate = this.eventDetail.endDate;
      this.eventStartTime = this.eventDetail.startTime;
      this.eventEndTime = this.eventDetail.endTime;
      this.eventTags = this.eventDetail.tags;
    }, err => {
      this.error = err.statusText;
    });
  }

  // ADD EVENT
  addEvent() {
    this.$http.post(this.link, this.setEvent())
    .then(response => {
      this.eventStatus = this.setNotif('Added Successfully!', response, 'alert-success');
    }, err => {
      this.eventStatus = this.setNotif('Adding Failed!', err, 'alert-danger');
    });
  }

  // EDIT EVENT
  editEvent(_id) {
    this.$http.put(this.link + '/' + _id, this.setEvent())
    .then(response => {
      this.eventStatus = this.setNotif('Updated Successfully!', response, 'alert-success');
    }, err => {
      this.eventStatus = this.setNotif('Updating Failed!', err, 'alert-danger');
    });
  }

  // DELETE EVENT
  deleteEvent(_id) {
    this.$http.delete(this.link + '/' + _id)
    .then(response => {
      this.eventStatus = this.setNotif('Deleted Successfully!', response, 'alert-success');
    }, err => {
      this.eventStatus = this.setNotif('Deleting Failed!', err, 'alert-danger');
    });
  }
}

export default angular.module('ubaeApiApp.event', [uiRouter])
  .config(routes)
  .component('event', {
    template: require('./event.html'),
    controller: EventComponent,
    controllerAs: 'eventCtrl'
  })
  .name;
