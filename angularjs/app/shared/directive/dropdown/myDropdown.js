var app = angular
.module("dropdown")
.directive("myDropdown",function(){
    return {
       restrict:'E',
       templateUrl:"shared/directive/dropdown/myDropdown.html",
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
           options:"=",
           default:"="
       },
       link:{
           post:function(scope,iElement,iAttributes)
           {
               scope.options= [];
              // scope.$on('setSelectedEvent',(event,data)=>scope.setSelected(data));
           }
       }
    };

});