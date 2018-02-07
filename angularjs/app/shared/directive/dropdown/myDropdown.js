var app = angular
.module("expenseTracker")
.directive("myDropdown",function(){
    return {
       restrict:'E',
       templateUrl:"shared/directive/dropdown/myDropdown.html",
       controller: function($scope)
       {
           function setSelected(option)
           {
              console.log("Am I getting called",option);
              $scope.selected = option;
           }
           console.log("$$scope",$scope);
           $scope.setSelected = setSelected;

       },
       scope:{
           options:"="
       },
       link:{
           post:function(scope,iElement,iAttributes)
           {
              scope.selected =  scope.options[0];
              console.log("###" , $(iElement).siblings().find("li"));
              /*
              $(iElement).siblings().find("li").bind({click:function(event){
                 console.log("Am I getting called 222",event.target); 
                scope.setSelected();
              }}); */
            
           }
       }
    };

});