/**
 * Created by fedor on 25.09.2015.
 */
angular.module('justCodedTestApp').controller('RichCtrl', [
  '$rootScope', '$scope', '$location', '$route', 'CartService',
  function ($rootScope, $scope, $location, $route,  CartService ) {
    'use strict';

    $scope.collapseButton =collapseButton;
    $scope.cart = CartService.cart;
    this.filterExpression = {rich :'true'};
    $scope.checkboxModel = {
      superPowerValue : false,
      richValue : true,
      geniusValue : false
    };
    function collapseButton(){
      $scope.buttonsVisible = [];
      for(var i = 0; i < $scope.cart.length; i++) $scope.buttonsVisible[i]=false;
    }
  }]);
