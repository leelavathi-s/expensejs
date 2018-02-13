angular
.module("expense",['dropdown','expenseService','currencyFormat'])
.controller("expenseController",function($scope,expenseTrackerService){

    $scope.categories = [];
    $scope.expense={};
    var categories=expenseTrackerService
    .getImage()
    .$promise
    .then(data => {
        $scope.categories = data;
       // $scope.$broadcast('setSelectedEvent', data[0]);        
    });

    $scope.saveExpense = function(option)
    {
        expenseTrackerService.save(option);
     }
     $scope.expenses = expenseTrackerService.getExpenses();
});