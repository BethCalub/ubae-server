import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  /*@ngInject*/
  constructor($http, $scope, socket, $window, $anchorScroll, $location) {
    this.$http = $http;
    this.socket = socket;
    this.$window = $window;

    this.$anchorScroll = $anchorScroll;
    this.$location = $location;
    this.$anchorScroll.yOffset = 60;

    this.informations = '/api/informations?type=';
    this.responses = '/api/responses';
    this.feedbacks = '/api/feedbacks';

    this.alertMe = function(message) {
      setTimeout(function() {
        $window.alert(message);
      });
    };

    // $scope.$on('$destroy', function() {
    //   socket.unsyncUpdates('information');
    // });
  }

  scrollTo(_id) {
    this.$location.hash(_id);
    this.$anchorScroll();
  }

  $onInit() {
    this.scrollTo('top');
    this.$http.get(this.informations)
    .then(response => {
      this.informationEntries = response.data;
      console.log(response.statusText);
      // this.socket.syncUpdates('information', this.informationEntries);
    }, err => {
      console.log(err.statusText);
    });

    this.$http.get(this.responses)
    .then(response => {
      this.responseEntries = response.data;
      console.log(response.statusText);
    }, err => {
      console.log(err.statusText);
    });

    this.$http.get(this.feedbacks)
    .then(response => {
      this.feedbackEntries = response.data;
      console.log(response.statusText);
    }, err => {
      console.log(err.statusText);
    });
  }
}

export default angular.module('ubaeApiApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
