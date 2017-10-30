'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './location.routes';

export class LocationComponent {

  /*@ngInject*/
  constructor($http, $scope, socket, $anchorScroll, $location) {
    this.$http = $http;
    this.socket = socket;
    this.entryID = '';

    this.$anchorScroll = $anchorScroll;
    this.$location = $location;
    this.$anchorScroll.yOffset = 60;

    //connection to the server
    this.endpoint = {
      link: '/api/informations',
      socket: 'location'
    };

    //data information
    this.dataInfo = {
      name: 'Location',
      info: 'The location table contains the different locations in the University such as offices, departments and other notable places. This table consists of data which answers WHERE questions.',
      guide: ['The variable \'name\' includes the name of the location.',
      'The variable \'location\' includes the building name, floor, and room.',
      'The \'message\' variable contains the sentence form of \'location\' which will serve as UBAEs reply. Try to make it witty as possible as to emulate more human-like thinking.',
      'The variable \'tags\' contains keywords that will be detected to determine which data UBAE will use as a response to the inquiry. Try to add more tags which are possible keywords.'],
      show: true,
      table: ['#', 'Name', 'Message', 'Tags']
    };

    //data filters
    this.filter = {
      archive: {
        options: {
          'All Entries': '',
          'Active Entries': 'true',
          Archived: 'false'
        },
        selected: 'true'
      }
    };

    //status messages
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

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates(this.endpoint.socket);
    });
  }

  scrollTo(_id) {
    this.$location.hash(_id);
    this.$anchorScroll();
  }

  closeDataInfo() {
    this.dataInfo.show = false;
  }

  resetForm() {
    this.eventStatus = 'Resetting Form';
    this.entryID = '';
    this.name = '';
    this.details = '';
    this.message = '';
    this.tags = '';
  }

  //onLoad
  $onInit() {
    this.eventStatus = 'Loading...';
    this.$http.get(this.endpoint.link + '?type=where')
    .then(response => {
      this.entryList = response.data;
      this.socket.syncUpdates(this.endpoint.socket, this.entryList);
      this.eventStatus = this.status.data.success;
      console.log(response.statusText);
    }, err => {
      this.eventStatus = this.status.data.error;
      console.log(err.statusText);
    });
  }

  //Get all table entries
  getEntries() {
    this.$http.get(this.endpoint.link + '?type=where')
    .then(response => {
      this.entryList = response.data;
      this.socket.syncUpdates(this.endpoint.socket, this.entryList);
      console.log(response.statusText);
    }, err => {
      console.log(err.statusText);
    });
  }

  //Get an entry from the list
  getEntry(_id) {
    this.eventStatus = 'Processing...';
    this.$http.get(this.endpoint.link + '/' + _id)
    .then(response => {
      this.entryID = response.data._id;
      this.name = response.data.name;
      this.details = response.data.location;
      this.message = response.data.message;
      this.tags = response.data.tags;
      this.eventStatus = this.status.select.success;
      console.log(response.statusText);
      this.isCollapsed = true;
    }, err => {
      this.eventStatus = this.status.select.error;
      console.log(err.statusText);
    });
  }

  //Save entry
  saveEntry() {
    if(this.entryID) {
      //Update entry
      this.$http.patch(this.endpoint.link + '/' + this.entryID, {
        name: this.name,
        details: this.details,
        message: this.message,
        tags: this.tags
      })
      .then(response => {
        this.resetForm();
        this.getEntries();
        this.eventStatus = this.status.update.success;
        console.log(response.statusText);
        this.isCollapsed = false;
      }, err => {
        this.eventStatus = this.status.update.error;
        console.log(err.statusText);
      });
    } else {
      //Create entry
      this.$http.post(this.endpoint.link, {
        name: this.name,
        details: this.details,
        message: this.message,
        tags: this.tags
      })
      .then(response => {
        this.resetForm();
        this.eventStatus = this.status.create.success;
        console.log(response.statusText);
        this.isCollapsed = false;
      }, err => {
        this.eventStatus = this.status.create.error;
        console.log(err.statusText);
      });
    }
  }

  //Archive an entry
  archiveEntry(_id) {
    this.eventStatus = 'Processing...';
    this.$http.put(this.endpoint.link + '/' + _id, {
      active: false
    })
    .then(response => {
      this.eventStatus = this.status.archive.success;
      console.log(response.statusText);
      this.getEntries();
    }, err => {
      this.eventStatus = this.status.archive.error;
      console.log(err.statusText);
    });
  }

  //Archive an entry
  unarchiveEntry(_id) {
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
  deleteEntry(_id) {
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
}

export default angular.module('ubaeApiApp.location', [uiRouter])
  .config(routes)
  .component('location', {
    template: require('./location.html'),
    controller: LocationComponent,
    controllerAs: 'locationCtrl'
  })
  .name;
