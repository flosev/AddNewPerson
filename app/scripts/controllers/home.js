'use strict';

/**
 * @ngdoc function
 * @name justCodedTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the justCodedTestApp
 */

angular.module('justCodedTestApp').controller('HomeCtrl', [
  '$rootScope', '$scope', '$location', '$route', 'CartService',
  function ($rootScope, $scope, $location, $route,  CartService ) {
    'use strict';


    $scope.collapseButton =collapseButton;
    $scope.cart = CartService.cart;
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchFish   = '';     // set the default search/filter term

    $scope.checkboxModel = {
      superPowerValue : false,
      richValue : false,
      geniusValue : false
    };
    function collapseButton(){
      $scope.buttonsVisible = [];
      for(var i = 0; i < $scope.cart.length; i++) $scope.buttonsVisible[i]=false;
    }
  }]);


