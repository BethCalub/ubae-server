'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './instruction.routes';

export class InstructionComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('ubaeApiApp.instruction', [uiRouter])
  .config(routes)
  .component('instruction', {
    template: require('./instruction.html'),
    controller: InstructionComponent,
    controllerAs: 'instructionCtrl'
  })
  .name;
