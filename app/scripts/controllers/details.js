
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
  .controller('DetailsCtrl', function ($scope, phones) {
    $scope.phones = phones.getData();
  });
