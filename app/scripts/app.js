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
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/details/:id', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
