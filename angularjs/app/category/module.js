angular.module("category",['expenseService'])
.controller("categoryController",function($scope,expenseTrackerService){
    $scope.categoriesFromDB=[];
    $scope.categoriesFromDB = expenseTrackerService.getCategories();
    console.log("categories::",$scope.categoriesFromDB);
});