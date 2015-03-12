'use strict';

/**
 * @ngdoc function
 * @name projetoExemploApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetoExemploApp
 */
angular.module('projetoExemploApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
