'use strict';

/**
 * @ngdoc function
 * @name progApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the progApp
 */

// Progress Bar
angular.module('progApp')
  .controller('mainCtrl', function ($scope, $http) {
  	//$http.get('http://localhost:5500/restaurant/')
    $http.get('src/new_order_status.json')
  .success(function (data) { 
    $scope.theorders = data; 
     

  });
   
});





