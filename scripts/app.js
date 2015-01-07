'use strict';

/**
 * @ngdoc overview
 * @name adeclabApp
 * @description
 * # adeclabApp
 *
 * Main module of the application.
 */
angular
  .module('adeclabApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/team', {
        templateUrl: '/views/team.html',
        controller: 'TeamCtrl',
        controllerAs: 'team'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  })
  /**
   * http://stackoverflow.com/questions/16333014/hide-a-div-on-scroll-with-angularjs
   * http://stackoverflow.com/questions/14878761/angularjs-bind-scroll-toggle-class
   * http://jsfiddle.net/eTTZj/30/
   * http://jsfiddle.net/Tx7md/2/
   */
  .directive('scroll', function () {
    function link(scope, element, attrs) {
      angular.element(element).bind('scroll', function($parse) {
        if (this.pageYOffset >= 100) {
          $parse(attrs.scroll).assign(scope, true);
        } else {
          $parse(attrs.scroll).assign(scope, false);
        }
        scope.$apply();
      });
    }

    return {
      link: link
    };
  });
