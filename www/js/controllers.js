'use strict';

/* Controllers */

angular.module('sportscorp.controllers', [])
.controller('appCtrl', function($scope){
  
})
  .controller('loginCtrl', ['$scope', function($scope) {
    $scope.showReg = false;
  }])
  .controller('calCtrl', ['$scope', function($scope) {

  }])
  .controller('eventCtrl', ['$scope', function($scope) {

  }])
  .controller('profileCtrl', ['$scope', function($scope) {

  }])
  .controller('awardCtrl', ['$scope', function($scope) {

  }])
  .controller('dashboardCtrl', ['$scope', function($scope) {

  }])
  .controller("NavCtrl", function ($scope, Navigation) {
  $scope.navs = Navigation.list();
});
