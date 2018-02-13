var app = angular
.module("expenseTracker")
.config(function($routeProvider){
 $routeProvider.when("/expense",{
   templateUrl:"expense/expense.html"
 })
 .when("/category",{
   templateUrl:"category/category.html"
 })
 .when("/home",{
   templateUrl:"/home.html"
 });
});

