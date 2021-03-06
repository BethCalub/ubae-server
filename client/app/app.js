'use strict';

import angular from 'angular';
import ngAnimate from 'angular-animate';
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
import statusbar from '../components/statusbar/statusbar.directive';
import modal from '../components/modal/modal.service';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import ubae from './ubae/ubae.component';

import ResponseComponent from './response/response.component';
import FeedbackComponent from './feedback/feedback.component';
import MaintenanceComponent from './maintenance/maintenance.component';

import CreateEntryController from './maintenance/create/createEntry.controller';
import EditEntryController from './maintenance/edit/editEntry.controller';
import ArchiveEntryController from './maintenance/archive/archiveEntry.controller';
import RestoreEntryController from './maintenance/restore/restoreEntry.controller';
import DeleteEntryController from './maintenance/delete/deleteEntry.controller';
import EntriesController from './maintenance/entries/entries.controller';
import PromptController from './maintenance/prompt/prompt.controller';

import ArchiveResponseController from './response/archive/archiveResponse.controller';
import RestoreResponseController from './response/restore/restoreResponse.controller';
import DeleteResponseController from './response/delete/deleteResponse.controller';
import PromptResponseController from './response/prompt/promptResponse.controller';

import CreateResponseController from './response/create/createResponse.controller';
import EditResponseController from './response/edit/editResponse.controller';

import './app.scss';

angular.module('ubaeApiApp', [ngAnimate, ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,
  uiBootstrap, _Auth, account, admin, 'validation.match', ubae, modal, navbar, footer, main, constants,
  socket, util, statusbar,
  ResponseComponent,
  FeedbackComponent,
  MaintenanceComponent,
  CreateEntryController,
  EditEntryController,
  EntriesController,
  CreateResponseController,
  EditResponseController,
  PromptController,
  ArchiveEntryController,
  RestoreEntryController,
  DeleteEntryController,
  ArchiveResponseController,
  RestoreResponseController,
  DeleteResponseController,
  PromptResponseController
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
