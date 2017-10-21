'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './response.routes';

export class ResponseComponent {

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
      link: '/api/responses',
      socket: 'response'
    };

    //data information
    this.dataInfo = {
      name: 'Response',
      info: 'The response table contains conversational messages which can handle users who want to use the UBAE for fun.',
      guide: ['The variable \'message\' contains UBAEs reply. Try to make it witty as possible as to emulate more human-like thinking which can handle sarcastic inquiries.',
      'The variable \'tags\' contains keywords that will be detected to determine which data UBAE will use as a response to users message. Try to add more tags which are possible keywords.'],
      show: true,
      table: ['#', 'Message', 'Tags']
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
    this.message = '';
    this.tags = '';
  }

  //onLoad
  $onInit() {
    this.eventStatus = 'Loading...';
    this.$http.get(this.endpoint.link)
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
    this.$http.get(this.endpoint.link)
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

export default angular.module('ubaeApiApp.response', [uiRouter])
  .config(routes)
  .component('response', {
    template: require('./response.html'),
    controller: ResponseComponent,
    controllerAs: 'responseCtrl'
  })
  .name;
