'use strict';


// Declare app level module which depends on filters, and services
angular.module('hseSportsApp', [
  'ngRoute',
  'hseSportsApp.filters',
  'hseSportsApp.services',
  'hseSportsApp.directives',
  'hseSportsApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/login.html', 
  								 controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html',
  								 controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
