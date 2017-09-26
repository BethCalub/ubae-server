'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './information.routes';

export class InformationComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('ubaeApiApp.information', [uiRouter])
  .config(routes)
  .component('information', {
    template: require('./information.html'),
    controller: InformationComponent,
    controllerAs: 'informationCtrl'
  })
  .name;
