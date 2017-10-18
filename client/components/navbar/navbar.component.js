'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {

  menu = [{
    title: 'UBAE',
    state: 'main'
  }, {
    title: 'Feedback',
    state: 'feedback'
  }, {
    title: 'Information',
    state: 'information'
  }, {
    title: 'Event',
    state: 'event'
  }, {
    title: 'Location',
    state: 'location'
  }, {
    title: 'Instruction',
    state: 'instruction'
  }, {
    title: 'Provider',
    state: 'provider'
  }, {
    title: 'Response',
    state: 'response'
  }];

  constructor(Auth) {
    'ngInject';
    this.close = this.closeNav();
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
  
    this.isCollapsed = true;
  }

  closeNav() {
    this.isCollapsed = false;
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
