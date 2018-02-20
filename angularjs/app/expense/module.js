angular
.module("expense",['dropdown','expenseService','currencyFormat'])
.controller("expenseController",function($scope,expenseTrackerService){

    $scope.categories = [];
    $scope.expense={};
    expenseTrackerService
    .getImage()
    .$promise
    .then(data => {
        $scope.categories = data;
       // $scope.$broadcast('setSelectedEvent', data[0]);        
    });

    $scope.saveExpense = option =>
    {
        expenseTrackerService.save(option).$promise.then(data=>$scope.isSaved=true);
     }
     $scope.clear = expense => {expense.date="";expense.amount="",expense.description=""}
    // $scope.expenses = expenseTrackerService.getExpenses();
});