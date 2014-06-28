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
  .controller('eventCtrl', ['$scope', 'Events', function($scope, Events) {
    // $scope.events = Events.query();
    Events.query().success(function(data){
      console.log(data);
      $scope.events = data;
    });
    $scope.accept = function(){
      alert('Accepted event');
    }
  }])
  .controller('profileCtrl', ['$scope', 'Volunteers', function($scope, Volunteers) {
    Volunteers.query().success(function(data){
      $scope.volunteer = data[0];
    });
  }])
  .controller('awardCtrl', ['$scope', function($scope) {

  }])
  .controller('dashboardCtrl', ['$scope', function($scope) {

  }])
  .controller("NavCtrl", function ($scope, Navigation) {
  $scope.navs = Navigation.list();
});
