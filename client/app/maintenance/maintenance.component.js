'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './maintenance.routes';

export class MaintenanceComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('ubaeApiApp.maintenance', [uiRouter])
  .config(routes)
  .component('maintenance', {
    template: require('./maintenance.html'),
    controller: MaintenanceComponent,
    controllerAs: 'maintenanceCtrl'
  })
  .name;
