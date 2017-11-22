'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './maintenance.routes';

export class MaintenanceComponent {
  /*@ngInject*/
  constructor($stateParams) {
    this.$stateParams = $stateParams;
    this.earmix = this.$stateParams.type;
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
