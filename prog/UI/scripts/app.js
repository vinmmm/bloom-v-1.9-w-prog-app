'use strict';

/**
 * @ngdoc overview
 * @name progApp
 * @description
 * # progApp
 *
 * Main module of the application.
 */
angular.module('progApp', [
   'ngRoute'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

 
 



