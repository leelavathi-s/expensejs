var app = angular
.module("expenseTracker",['ngRoute','ngResource'])
.controller("expenseTrackerController",function($scope,expenseTrackerService){
    $scope.categories = [];
    $scope.expense={};
    var categories=expenseTrackerService
    .getImage()
    .$promise
    .then(function(data){
        $scope.categories = data;
    });

    $scope.saveExpense = function(option)
    {
        expenseTrackerService.save(option);
     }

});
 