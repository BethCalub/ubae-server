'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './provider.routes';

export class ProviderComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('ubaeApiApp.provider', [uiRouter])
  .config(routes)
  .component('provider', {
    template: require('./provider.html'),
    controller: ProviderComponent,
    controllerAs: 'providerCtrl'
  })
  .name;
