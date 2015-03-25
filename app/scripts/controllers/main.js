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
    $scope.sortOptions = ['price', 'name'];
    $scope.sortBy = 'price';
    $scope.phones = phones.getPhones.query();
    
    $scope.phones.$promise.then(function(result) {
      return result.map(function(phone) {
        phone.imageUrl = '/images/' + phone.image;
        return phone;
      });
    });
  });
