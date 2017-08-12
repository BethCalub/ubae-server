'use strict';
const angular = require('angular');

/*@ngInject*/
export function departmentService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('ubaeApiApp.department', [])
  .service('department', departmentService)
  .name;
