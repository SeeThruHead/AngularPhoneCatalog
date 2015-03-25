/*jslint browser: true*/
/*global angular */
'use strict';

/**
 * @ngdoc function
 * @name angularPhoneCatalogueApp.service:Phones
 * @description
 * # MainCtrl
 * Controller of the angularPhoneCatalogueApp
 */

angular.module('angularPhoneCatalogueApp')
  .factory('phones', function ($resource) {
    var service = {};

    service.getPhones = $resource('/phonecat.json', {}, {
      query: {
        method: 'GET',
        isArray: true,
      }
    });
    return service;
  });
