'use strict';

/**
 * @ngdoc function
 * @name adeclabApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adeclabApp
 */
angular.module('adeclabApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
