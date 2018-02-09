var app = angular
.module("expenseTracker",['ngRoute','modal','dropdown','expenseService','currencyFormat'])
.controller("expenseTrackerController",function($scope,expenseTrackerService,$filter){
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
 