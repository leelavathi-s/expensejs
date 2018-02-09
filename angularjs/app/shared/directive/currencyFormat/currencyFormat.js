var app = angular
.module("currencyFormat")
.directive("myCurrencyFormat",function($filter){
    return {
       restrict:'A',
       link:{
           post:function(scope,iElement,iAttributes)
           {
              iElement.bind('blur',function()
            {
               var formattedValue = $filter('currency')(iElement.val());
               iElement.val(formattedValue);
            });
            
           }

       }
    };

});