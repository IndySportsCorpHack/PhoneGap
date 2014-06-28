'use strict';


// Declare app level module which depends on filters, and services
angular.module('hseSportsCorp', [
  'ngRoute',
  'hseSportsCorp.filters',
  'hseSportsCorp.services',
  'hseSportsCorp.directives',
  'hseSportsCorp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', 
  								 controller: 'loginCtrl'});
  $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html',
  								 controller: 'dashboardCtrl'});
  $routeProvider.when('/calendar', {templateUrl: 'partials/calendar.html',
                   controller: 'calCtrl'});
  $routeProvider.when('/event', {templateUrl: 'partials/event.html',
                   controller: 'eventCtrl'});
  $routeProvider.when('/award', {templateUrl: 'partials/award.html',
                   controller: 'awardCtrl'});
  $routeProvider.when('/profile', {templateUrl: 'partials/profile.html',
                   controller: 'profileCtrl'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
