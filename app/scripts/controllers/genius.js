/**
 * Created by fedor on 25.09.2015.
 */
angular.module('justCodedTestApp').controller('GeniusCtrl', [
  '$rootScope', '$scope', '$location', '$window', '$route', 'CartService',
  function ($rootScope, $scope, $location, $window,  $route,  CartService ) {
    'use strict';

    $scope.collapseButton =collapseButton;
    $scope.cart = CartService.cart;
    $scope.cartLength = CartService.cart.items;
    this.filterExpression = {genius :'true'};
    $scope.checkboxModel = {
      superPowerValue : false,
      richValue : false,
      geniusValue : true
    };
    $scope.$watchCollection('cartLength', function(newNames, oldNames) {
      if ($scope.checkboxModel.geniusValue == false) $location.path('/home');
    });
    function collapseButton(){
      $scope.buttonsVisible = [];
      for(var i = 0; i < $scope.cart.length; i++) $scope.buttonsVisible[i]=false;
    }
  }]);
