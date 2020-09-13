var poshCounter = angular.module("poshCounter", ['ngStorage']);

poshCounter.controller("PoshCounterController", function($scope, $localStorage){

    $scope.saveData = function() {
        $localStorage.successCounter = $scope.successCounter;
        $localStorage.failCounter = $scope.failCounter;
    }

    $scope.loadData = function() {
        $scope.successCounter = $localStorage.successCounter;
        $scope.failCounter = $localStorage.failCounter;
    }
    
    $scope.resetData = function() {
        $scope.successCounter = 0;
        $scope.failCounter = 0;
    }

}) ;