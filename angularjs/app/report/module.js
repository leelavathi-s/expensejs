
let reportApp = angular.module("report", ['chart.js', 'expenseService']);
reportApp.controller("myController", function ($scope, expenseTrackerService) {

  $scope.labels = [];
  $scope.data = [];
  $scope.labelsForBarChart = [];
  $scope.dataForBarChart = [];
  $scope.getExpensesByYear = () => {
    $scope.norecords = true;
    $scope.labels = [];
    $scope.data = [];
    expenseTrackerService.getExpensesGroupedByCategory($scope.year)
      .$promise.then(data => {
        data.forEach(element => {
          $scope.labels.push(element.category.id);
          $scope.data.push(element.percentage);
          $scope.norecords = false;
        });
      })
  }
  $scope.getExpensesYearwise = () => {
    $scope.norecordsForBarChart = true;
    $scope.labelsForBarChart = [];
    $scope.dataForBarChart = [];
    $scope.series = [];
    let categories = [];
    expenseTrackerService.getExpensesYearwise($scope.period)
      .$promise.then(data => {
        var years = new Set();
        var categories = new Set();
        var yearsArray;
        data.forEach(element => {
          categories.add(element.category);
          element.rows.forEach(item => {
            years.add(item.year);
          });
          yearsArray = Array.from(years);
          yearsArray.sort();

          $scope.labelsForBarChart = yearsArray;
          $scope.series = categories;
        });
        data.forEach(element => {
          var expenseData = [];
          for (var i = 0; i <yearsArray.length; ++i) {
            expenseData.push(0);
          }
          element.rows.forEach(item => {
            expenseData[yearsArray.indexOf(item.year)] = item.amount;
          });  
          $scope.dataForBarChart.push(expenseData);
          console.log($scope.dataForBarChart);
          $scope.norecordsForBarChart = false;
        });
      })
  }
  $scope.options = {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        scaleLabel: {
          display: true,
          labelString: 'Amount Spent',
          fontStyle: 'bold'
        },
        ticks: {
          stepSize: 500
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Year',
          fontStyle: 'bold'
        }
      }]
    }
  };

}).config(['ChartJsProvider', function (ChartJsProvider) {
  // Configure all charts 
  ChartJsProvider.setOptions({
    chartColors: ['#FF5252', '#FF8A80'],
    responsive: true
  });

}]);

