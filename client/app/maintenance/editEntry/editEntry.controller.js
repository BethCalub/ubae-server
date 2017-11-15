'use strict';
const angular = require('angular');

/*@ngInject*/
export function editEntryController() {
  this.message = 'Hello';
}

export default angular.module('ubaeApiApp.editEntry', [])
  .controller('EditEntryController', editEntryController)
  .name;
