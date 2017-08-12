'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './dept.routes';

export class DeptComponent {
  deptList = [];
  newDept = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('dept');
    });
  }

  $onInit() {
    this.$http.get('/api/depts')
      .then(response => {
        this.deptList = response.data;
        this.socket.syncUpdates('dept', this.deptList);
      });
  }

  addDepartment() {
    console.log('dept has been clicked');
    if(this.newDept) {
      this.$http.post('/api/depts', {
        department: this.newDept
      });
      this.newDept = '';
    }
  }

  deleteDept(dept) {
    this.$http.delete(`/api/depts/${dept._id}`);
  }
}

export default angular.module('ubaeApiApp.dept', [uiRouter])
  .config(routes)
  .component('dept', {
    template: require('./dept.html'),
    controller: DeptComponent,
    controllerAs: 'deptCtrl'
  })
  .name;
