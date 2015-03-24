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
  .factory('phones', function ($http) {
    var service = {},
      phoneData;

    service.getData = function() {
      if (phoneData) {
        return phoneData;
      }
      $http.get('/phonecat.json')
        .then(function(response) {
          phoneData = response.data;
          console.log(phoneData);
          return phoneData;
        });
    };
    console.log(service);
    return service;
  });
