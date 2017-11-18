'use strict';
const angular = require('angular');

/*@ngInject*/
export function entriesController($http, $scope, socket, $anchorScroll, $location, $stateParams) {
  this.$http = $http;
  this.socket = socket;
  this.entryID = '';

  this.$anchorScroll = $anchorScroll;
  this.$location = $location;
  this.$anchorScroll.yOffset = 60;

  //connection to the server
  this.endpoint = {
    link: '/api/informations',
    socket: 'information'
  };

  //get all entries
  this.$http.get(this.endpoint.link + '?type=' + $stateParams.type)
  .then(response => {
    this.entryList = response.data;
    this.socket.syncUpdates(this.endpoint.socket, this.entryList);
    console.log(response.statusText);
  }, err => {
    console.log(err.statusText);
  });

  //data information
  this.dataInfo = {
    name: 'Table Name',
    info: 'Table Info',
    guide: [
      'The \'name\' contains office names, department names, programs offered, services offered, and etc.',
      'The \'details\' contains additional information of an entry.',
      'The \'message\' contains the response which will be used to reply.',
      'The \'keywords\' contains words that will determine which entry UBAE will use as a response to an inquiry.'],
    show: true,
    table: ['#', 'Name', 'Message', 'Tags']
  };

  if($stateParams.type) {
    if($stateParams.type == 'what') {
      this.dataInfo.name = 'Information';
      this.dataInfo.info = 'The information table consists of data which is answerable by WHAT questions. This table contains information about the University, its departments and its courses offered, offices and services offered, requirements, scholarships, and their description.';
    }
    if($stateParams.type == 'when') {
      this.dataInfo.name = 'Event';
      this.dataInfo.info = 'The event table contains events which are included in the school calendar. This table consists of data which answers WHEN questions.';
    }
    if($stateParams.type == 'where') {
      this.dataInfo.name = 'Location';
      this.dataInfo.info = 'The location table contains the different locations in the University such as offices, departments and other notable places. This table consists of data which answers WHERE questions.';
    }
    if($stateParams.type == 'how') {
      this.dataInfo.name = 'Instruction';
      this.dataInfo.info = 'The instruction table contains the services offered by the University and its processes. This table consists data which answers HOW questions.';
    }
    if($stateParams.type == 'which') {
      this.dataInfo.name = 'Provider';
      this.dataInfo.info = 'The provider table contains data which includes services or programs offered by a certain office or department. This table consists of data which answers WHICH questions.';
    }
  }

  this.status = {
    data: {
      success: 'Data Successfully Loaded',
      error: 'Loading Failed'
    },
    select: {
      success: 'Entry Successfully Loaded',
      error: 'Selecting Failed'
    },
    create: {
      success: 'Entry Saved Successfully',
      error: 'Saving Failed'
    },
    update: {
      success: 'Entry Updated Successfully',
      error: 'Updated Failed'
    },
    archive: {
      success: 'Entry Archived Successfully',
      error: 'Archive Failed'
    },
    unarchive: {
      success: 'Entry Restored Successfully',
      error: 'Restore Failed'
    },
    delete: {
      success: 'Entry Deleted Successfully',
      error: 'Delete Failed'
    }
  };

  this.scrollTo = function(_id) {
    this.$location.hash(_id);
    this.$anchorScroll();
  };

  this.closeDataInfo = function() {
    this.dataInfo.show = false;
  };
}

export default angular.module('ubaeApiApp.entries', [])
  .controller('EntriesController', entriesController)
  .name;
