'use strict';

/**
 * @ngdoc function
 * @name projetoExemploApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetoExemploApp
 */
angular.module('projetoExemploApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
