'use strict';

angular.module('justCodedTestApp').factory("CartService", function () {

  var myCart = new userStorage("AngularStore");
  return {
      cart: myCart
    };
});
