/*jslint browser: true*/
/*global angular */
'use strict';

/**
 * @ngdoc function
 * @name angularPhoneCatalogueApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the angularPhoneCatalogueApp
 */
angular.module('angularPhoneCatalogueApp')
  .controller('DetailsCtrl', function ($scope, $routeParams, phones) {
    function getId(results, id) {
      for (var i = 0, len = results.length; i < len; i++) {
        if (results[i].id === id) {
          return results[i];
        }
      }
    }
    $scope.phones = phones.getPhones.query();
    $scope.phones.$promise.then(function (result) {
        $scope.phone = getId(result, $routeParams.id);
        $scope.phone.imageUrl= '/images/' + $scope.phone.image;
    });

  });