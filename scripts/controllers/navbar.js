'use strict';

/**
 * @ngdoc function
 * @name adeclabApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the adeclabApp
 */
angular.module('adeclabApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .directive('navbar', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/navbar.html'
    };
  });
