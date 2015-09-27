/**
 * Created by fedor on 24.09.2015.
 */
angular.module('justCodedTestApp').directive('sideBar', ['CartService',  function( CartService) {
  'use strict';

  return {
    templateUrl: 'views/sidebar.html',
    restrict: 'A',
    controller: function($scope, CartService) {
      $scope.cart = CartService.cart;
      }
    }
}]);



