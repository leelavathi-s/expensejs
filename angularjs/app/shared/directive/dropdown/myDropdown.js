var app = angular
.module("expenseTracker")
.directive("myDropdown",function(){
    return {
       restrict:'E',
       templateUrl:"shared/directive/dropdown/myDropdown.html",
       replace:true,
       controller: function($scope)
       {
           function setSelected(option)
           {
              $scope.selected = option;
              setCategory(option.category);
           } 
           function setCategory(category)
           {
             let parent = $scope.$parent;
             parent.expense.category=category;
           }
           $scope.setSelected = setSelected;
           $scope.setCategory = setCategory;
       },
       scope:{
           options:"="
       },
       link:{
           post:function(scope,iElement,iAttributes)
           {
              scope.selected =  scope.options[0];
              scope.setCategory(scope.selected.category);
           }
       }
    };

});