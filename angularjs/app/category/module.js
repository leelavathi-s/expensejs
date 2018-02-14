angular.module("category",['expenseService'])
.controller("categoryController",function($scope,expenseTrackerService){
    $scope.categoriesFromDB=[];
    $scope.categoriesFromDB = expenseTrackerService.getCategories();
    $scope.indexEdit =-1;
    $scope.edit= function(category,index){
        $scope.indexEdit =index;
    }
    $scope.add = function(){
        $scope.categoriesFromDB.push({isNew:true});
        $scope.indexEdit =$scope.categoriesFromDB.length-1;
        
    }
    $scope.remove = function(data,index){
        $scope.categoriesFromDB.splice(index,1);
    }
    $scope.save=function(category,index)
    {
        var response = (category.isNew)?expenseTrackerService.saveCategory(category):
        expenseTrackerService.updateCategory(category);
        
    }

});