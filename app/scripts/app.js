/*jslint browser: true*/
/*global angular */
'use strict';

/**
 * @ngdoc overview
 * @name angularPhoneCatalogueApp
 * @description
 * # angularPhoneCatalogueApp
 *
 * Main module of the application.
 */
angular
  .module('angularPhoneCatalogueApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/mainState');
    $stateProvider 
      .state('mainState', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('aboutState', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('detailState', {
        url: '/details?id',
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
      });
  });
