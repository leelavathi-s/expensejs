var app = angular
.module("expenseTracker",['ngRoute','ngResource'])
.controller("expenseTrackerController",function($scope,expenseTrackerService){
    $scope.categories = [];
    var categories=expenseTrackerService.query().$promise.then(function(data){
        $scope.categories = data;
    });
});
 