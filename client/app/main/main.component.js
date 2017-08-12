import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  awesomeThings = [];
  newThing = '';

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
        this.awesomeThings = response.data;
        this.socket.syncUpdates('dept', this.awesomeThings);
      });
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/depts', {
        department: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete(`/api/depts/${thing._id}`);
  }

  // uibModal.open({
  //   templateUrl: 'main.html',
  //   controller: 'MainController',
  //   animation: true,
  //   size: 'lg|sm',
  //   resolve: {
  //     items: function () {
  //       return scope.items;
  //     }
  //   }
  // }).result
  // .then(function (selectedItem) {
    
  // })
  // .catch(function () {
  //   // Modal dismissed.
  // });
}

export default angular.module('ubaeApiApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
