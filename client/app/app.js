'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-validation-match';

import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import sidenav from '../components/sidenav/sidenav.directive';
import modal from '../components/modal/modal.service';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import ubae from './ubae/ubae.component';

// import ResponseComponent from './response/response.component';
// import EventComponent from './event/event.component';
import FeedbackComponent from './feedback/feedback.component';
// import LocationComponent from './location/location.component';
// import DepartmentComponent from './department/department.component';
// import ServiceComponent from './service/service.component';
// import ProgramComponent from './program/program.component';

import './app.scss';

angular.module('ubaeApiApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,
  uiBootstrap, _Auth, account, admin, 'validation.match', ubae, modal, navbar, sidenav, footer, main, constants,
  socket, util,
  // ResponseComponent,
  // EventComponent,
  FeedbackComponent,
  // LocationComponent,
  // DepartmentComponent,
  // ServiceComponent,
  // ProgramComponent
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['ubaeApiApp'], {
      strictDi: true
    });
  });
