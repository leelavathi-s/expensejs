
let reportApp = angular.module("report", ['chart.js', 'expenseService']);
reportApp.controller("myController", function ($scope, expenseTrackerService) {

  $scope.labels =[];
  $scope.data=[];
  expenseTrackerService.getExpensesGroupedByCategory()
    .$promise.then(data => {
      data.forEach(element => {
        $scope.labels.push(element.category);
        $scope.data.push(element.percentage);
      });
    })
}).config(['ChartJsProvider', function (ChartJsProvider) {
  // Configure all charts 
  ChartJsProvider.setOptions({
    chartColors: ['#FF5252', '#FF8A80'],
    responsive: false
  });

}]);

