/**
 * Created by fedor on 25.09.2015.
 */
angular.module('justCodedTestApp').controller('SuperCtrl', [
  '$rootScope', '$scope', '$location', '$route', 'CartService',
  function ($rootScope, $scope, $location, $route,  CartService ) {
    'use strict';

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.collapseButton =collapseButton;
    $scope.cart = CartService.cart;
    this.filterExpression = {superpower :'true'};
    $scope.checkboxModel = {
      superPowerValue : true,
      richValue : false,
      geniusValue : false
    };
    function collapseButton(){
      $scope.buttonsVisible = [];
      for(var i = 0; i < $scope.cart.length; i++) $scope.buttonsVisible[i]=false;
    }
  }]);
