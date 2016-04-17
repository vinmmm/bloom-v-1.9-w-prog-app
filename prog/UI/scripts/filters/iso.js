'use strict';

/**
 * @ngdoc filter
 * @name progApp.filter:iso
 * @function
 * @description
 * # iso
 * Filter in the progApp.
 */

angular.module('progApp')
.filter('iso', function() {
  return function(input) {
    input = new Date(input).toISOString();
    return input;
    
  };
});