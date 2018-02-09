angular.module("modal").directive("myModal",function()
{
  return {
   restrict:"A",
   templateUrl:"/shared/directive/modal/myModal.html",
   scope:{},
   transclude:true,
   link:function(scope,iElement,iAttribute)
   {
      scope.showTemplate = false;
      iElement.click(function(event)
      {
        scope.showTemplate = true;
    });
   }
  };
});