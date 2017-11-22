'use strict';
const angular = require('angular');

/*@ngInject*/
export function promptController($stateParams) {
  this.action = $stateParams.action;
  this.referrer = $stateParams.referrer;
}

export default angular.module('ubaeApiApp.prompt', [])
  .controller('PromptController', promptController)
  .name;
