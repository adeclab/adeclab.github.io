'use strict';

/**
 * @ngdoc function
 * @name adeclabApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the adeclabApp
 */
angular.module('adeclabApp')
  .controller('TeamCtrl', ['$anchorScroll', '$location', '$scope',
    function ($anchorScroll, $location, $scope) {
      $scope.crew = [
        {'position' : 'Profesorowie',
         'members'  : [
            {'first_name'   : 'Witold',
             'last_name'    : 'Pleskacz',
             'publications' : '4'}
          ]},
        {'position' : 'Adiunkci',
         'members'  : [
            {'first_name'   : 'Tomasz',
             'last_name'    : 'Borejko',
             'publications' : '4'},
         ]},
        {'position' : 'Doktoranci',
          'members' : [
            {'first_name'   : 'Jakub',
             'last_name'    : 'Kopański',
             'publications' : '4'},
            {'first_name'   : 'Krzysztof',
             'last_name'    : 'Siwiec',
             'publications' : '8'}
          ]},
      ];
      $scope.gotoAnchor = function(loc) {
        var newHash = loc;
        if ($location.hash() !== newHash) {
          // set the $location.hash to `newHash` and
          // $anchorScroll will automatically scroll to it
          $location.hash(loc);
        } else {
          // call $anchorScroll() explicitly,
          // since $location.hash hasn't changed
          $anchorScroll();
        }
      };
    }
  ]);
