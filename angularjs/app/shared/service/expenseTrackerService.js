'use strict';

angular.
  module("expenseTracker").
  factory('expenseTrackerService', 
    function($resource)
     {
      return $resource('img/category.json',{}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  );
