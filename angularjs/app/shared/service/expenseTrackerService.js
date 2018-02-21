'use strict';

angular.
    module("expenseService").
    factory('expenseTrackerService',
    function ($resource) {
        let obj =
            {
                getImage: () => {
                    let Category = $resource('img/category.json');
                    return Category.query();
                },
                save: expense => {
                    let Expense = $resource('/expense');
                    return Expense.save(expense);
                },
                getExpensesGroupedByCategory: groupByYear => {
                    let Expense = $resource('/expense', { year: groupByYear }, {
                        query: {
                            method: 'GET',
                            isArray: true
                        }
                    });
                    return Expense.query();
                },
                getExpensesYearwise: periods => {
                    let Expense = $resource('/expense', { period: periods }, {
                        query: {
                            method: 'GET',
                            isArray: true
                        }
                    });
                    return Expense.query();
                },
                getCategories: () => {
                    let Category = $resource('/category');
                    return Category.query();
                },
                createCategory: category => {
                    let Category = $resource('/category');
                    return Category.save(category);
                },
                updateCategory: category => {
                    let Category = $resource('/category/:categoryId', { categoryId: category._id }, {
                        update: {
                            method: "PUT",
                            //// transformResponse: function (data, headers, statusCode) {
                            //   console.log(statusCode);//prints 200 if nothing went wrong
                            // var finalResponse = {
                            //   data: data,
                            // responseStatusCode: statusCode
                            //   };
                            // return finalResponse;
                            //}
                        }
                    });
                    return Category.update(category);
                },
                removeCategory: category => {
                    let Category = $resource('/category/:categoryId', { categoryId: category._id });
                    return Category.remove();
                }

            }
        return obj;
    });
