'use strict';


// Declare app level module which depends on filters, and services
angular.module('sportscorp', [
  'sportscorp.filters',
  'sportscorp.services',
  'sportscorp.directives',
  'sportscorp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/login.html', 
  								 controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html',
  								 controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
