'use strict';

angular.
    module("expenseService").
    factory('expenseTrackerService',
    function ($resource) {
        let obj =
            {
                getImage: function () {
                    let Category = $resource('img/category.json');
                    return Category.query();
                },
                save: function (expense) {
                    let Expense = $resource('/expense');
                    Expense.save(expense);
                },
                getExpenses: function (expense) {
                    let Expense = $resource('/expense', {}, {
                        query: {
                            method: 'GET',
                            isArray: true
                        }
                    });
                    return Expense.query();
                },
                getCategories: function (expense) {
                    let Category = $resource('/category');
                    return Category.query();
                },
                saveCategory: function (category) {
                    let Category = $resource('/category');
                    Category.save(category);
                },
                updateCategory: function (category) {
                    let Category = $resource('/category/:categoryId', { categoryId: '@id' }, {
                        update: {
                            method: "PUT",
                            transformResponse: function (data, headers, statusCode) {
                                console.log(statusCode);//prints 200 if nothing went wrong
                                var finalResponse = {
                                    data: data,
                                    responseStatusCode: statusCode
                                };
                                return finalResponse;
                            }
                        }});
                    return Category.update(category);
                },
                removeCategory: function (category) {
                    let Category = $resource('/category/:categoryId', { categoryId: '@id' });
                    Category.remove(category);
                }

            }
        return obj;
    });
