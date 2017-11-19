'use strict';
const angular = require('angular');

/*@ngInject*/
export function entriesController(Auth, $http, $scope, socket, $anchorScroll, $location, $state, $stateParams) {
  this.$http = $http;
  this.socket = socket;
  this.$state = $state;
  this.entryID = '';

  this.getCurrentUser = Auth.getCurrentUserSync().name;

  this.$anchorScroll = $anchorScroll;
  this.$location = $location;
  this.$anchorScroll.yOffset = 60;

  this.currentPage = 1;

  //connection to the server
  this.endpoint = {
    link: '/api/informations',
    socket: 'information'
  };

  this.sortType = '-searched';
  
  this.sortSelect = {
     // 'All Entries': '',
    'Most Frequent': '-searched',
    'Latest Entries': '-created.date',
    'Recently Modified': 'modified.date'
  };

  $scope.$on('$destroy', function() {
    socket.unsyncUpdates(this.endpoint.socket);
  });

  this.type = $stateParams.type;

  //get all entries
  this.eventStatus = 'Loading Data...';
  this.$http.get(this.endpoint.link + '?type=' + $stateParams.type)
    .then(response => {
      this.entryList = response.data;
      this.socket.syncUpdates(this.endpoint.socket, this.entryList);
      this.eventStatus = 'Data Successfully Loaded!';
      console.log(response.statusText);
    }, err => {
      console.log(err.statusText);
      this.eventStatus = 'Data Failed to Load!';
    });

  //data information
  this.dataInfo = {
    name: 'Table Name',
    info: 'Table Info',
    guide: [
      'The \'name\' contains office names, department names, programs offered, services offered, and etc.',
      'The \'details\' contains additional information of an entry.',
      'The \'message\' contains the response which will be used to reply.',
      'The \'keywords\' contains words that will determine which entry UBAE will use as a response to an inquiry.'
    ],
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

  this.getEntries = function() {
    this.$http.get(this.endpoint.link + '?type=' + $stateParams.type)
      .then(response => {
        this.entryList = response.data;
        this.socket.syncUpdates(this.endpoint.socket, this.entryList);
        console.log(response.statusText);
      }, err => {
        console.log(err.statusText);
      });
  };

  //Archive an entry
  this.archiveEntry = function(_id) {
    this.eventStatus = 'Processing...';
    this.$http.put(this.endpoint.link + '/' + _id, {
      active: false,
      archived: {
        author: this.getCurrentUser,
        date: new Date(Date.now())
      }
    })
      .then(response => {
        this.eventStatus = this.status.archive.success;
        console.log(response.statusText);
        this.getEntries();
        // this.$state.go('viewEntries', {type: $stateParams.type});
      }, err => {
        this.eventStatus = this.status.archive.error;
        console.log(err.statusText);
      });
  }

  //Archive an entry
  this.unarchiveEntry = function(_id) {
    this.eventStatus = 'Processing...';
    this.$http.put(this.endpoint.link + '/' + _id, {
        active: true
      })
      .then(response => {
        this.eventStatus = this.status.unarchive.success;
        console.log(response.statusText);
        this.getEntries();
      }, err => {
        this.eventStatus = this.status.unarchive.error;
        console.log(err.statusText);
      });
  }

  //Delete an entry
  this.deleteEntry = function(_id) {
    this.eventStatus = 'Processing...';
    this.$http.delete(this.endpoint.link + '/' + _id)
      .then(response => {
        this.eventStatus = this.status.delete.success;
        console.log(response.statusText);
      }, err => {
        this.eventStatus = this.status.delete.error;
        console.log(err.statusText);
      });
  }

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
