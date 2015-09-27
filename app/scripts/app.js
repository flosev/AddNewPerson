'use strict';

/**
 * @ngdoc overview
 * @name justCodedTestApp
 * @description
 * # justCodedTestApp
 *
 * Main module of the application.
 */
angular
  .module('justCodedTestApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl as ctrl'
      })
      .when('/super', {
        templateUrl: 'views/super.html',
        controller: 'SuperCtrl as ctrl'
      })
      .when('/rich', {
        templateUrl: 'views/rich.html',
        controller: 'RichCtrl as ctrl'
      })
      .when('/genius', {
        templateUrl: 'views/genius.html',
        controller: 'GeniusCtrl as ctrl'
      })
      .when('/:product/:productId', {
        templateUrl: 'views/pages/product.html',
        controller: 'productpage.ProductCtrl',
        controllerAs: 'ctrl',
        resolve: {
          product: ['$route', 'Main', function ($route, Main) {
            var product = $route.current.params.product;
            return Main.getProducts(product);

        }]
      }
    })
      .otherwise({
        redirectTo: '/'
      });
  });
