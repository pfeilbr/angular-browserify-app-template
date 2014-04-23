'use strict';

require('angular/angular');
require('angular-route/angular-route');
require('angular-resource/angular-resource');
require('angular-sanitize/angular-sanitize');
require('angular-cookies/angular-cookies');

var app = angular
	.module('angular-app', ['ngRoute'])
	.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });


app.controller('HomeCtrl', ['$scope', function($scope){
	$scope.message = 'Welcome!';
}]);
