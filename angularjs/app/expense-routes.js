var app = angular
.module("expenseTracker")
.config(function($routeProvider){
 $routeProvider.when("/expense",{
   templateUrl:"expense/expense.html"
 });
});

