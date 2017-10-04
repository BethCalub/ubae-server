import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  /*@ngInject*/
  constructor($http, $scope, socket, $window) {
    this.$http = $http;
    this.socket = socket;

    this.totalItems = 64;
    this.currentPage = 4;

    this.isCollapsed = true;

    this.tabs = [
      { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
      { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
    ];

    this.alertMe = function(message) {
      setTimeout(function() {
        $window.alert(message);
      });
    };
  
    this.model = {
      name: 'Tabs'
    };
  }

  $onInit() {

  }
}

export default angular.module('ubaeApiApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
