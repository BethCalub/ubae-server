'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './ubae.routes';

export class UbaeComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('ubaeApiApp.ubae', [uiRouter])
  .config(routes)
  .component('ubae', {
    template: require('./ubae.html'),
    controller: UbaeComponent,
    controllerAs: 'ubaeCtrl'
  })
  .name;
