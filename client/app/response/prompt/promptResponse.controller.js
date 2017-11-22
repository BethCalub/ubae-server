'use strict';
const angular = require('angular');

/*@ngInject*/
export function promptResponseController() {
  this.message = 'Hello';
}

export default angular.module('ubaeApiApp.promptResponse', [])
  .controller('PromptResponseController', promptResponseController)
  .name;
