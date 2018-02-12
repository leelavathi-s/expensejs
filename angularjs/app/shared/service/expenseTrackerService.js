'use strict';

angular.
  module("expenseService").
  factory('expenseTrackerService', 
    function($resource)
     {
        let obj = 
        {
            getImage:function()
            { 
               let Category = $resource('img/category.json',{}, {
                  query: {
                    method: 'GET',
                   isArray: true
                }}); 
                return Category.query();
            },
            save:function(expense)
            {
                let Expense = $resource('/expense');
                Expense.save(expense);
            },
            get:function(expense)
            {
                let Expense = $resource('/expense', {}, {
                    query: {
                      method: 'GET',
                     isArray: true
                  }}); 
                return Expense.query();
            }

        }
        return obj;
  });
