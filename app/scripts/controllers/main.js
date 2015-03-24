/*jslint browser: true*/
/*global angular */
'use strict';

/**
 * @ngdoc function
 * @name angularPhoneCatalogueApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPhoneCatalogueApp
 */
angular.module('angularPhoneCatalogueApp')
  .controller('MainCtrl', function ($scope, phones) {
    $scope.phones = phones.getPhones.query();
  });
