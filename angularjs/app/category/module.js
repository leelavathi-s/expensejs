angular.module("category", ['expenseService', 'ui.bootstrap', 'myyModal'])
    .controller("categoryController", function ($scope, expenseTrackerService, $uibModal) {
        $scope.categoriesFromDB = [];
        $scope.categoriesFromDB = expenseTrackerService.getCategories();
        $scope.indexEdit = -1;
        $scope.indexCreate = -1;
        $scope.isSaved = false;
        $scope.edit = function (category, index) {
            $scope.indexEdit = index;
            $scope.isSaved = false;

        }
        $scope.add = function (category, index) {
            $scope.indexCreate = index;
            $scope.categoriesFromDB.push({ name: "" });
            $scope.indexCreate = $scope.categoriesFromDB.length - 1;
            $scope.isSaved = false;

        }
        $scope.create = function (category, index) {
            var response = expenseTrackerService.createCategory(category);
            response.$promise.then(data => { $scope.indexCreate = -1; $scope.isSaved = true; $scope.categoriesFromDB = expenseTrackerService.getCategories();})
                .catch((error, response) => { $scope.isError = true });
        }
        $scope.remove = function (category, index) {
            var uibModalInstance = openModal($uibModal);
            uibModalInstance.result.then((data) => {
                if (data) {
                    var response = expenseTrackerService.removeCategory(category);
                    response.$promise.then(data => { $scope.categoriesFromDB.splice(index, 1); $scope.isSaved = true; })
                        .catch((error, response) => { $scope.isError = true });
                    $scope.isDelete = false;
                }
            });
        }
        $scope.update = function (category, index) {
            var response = expenseTrackerService.updateCategory(category);
            response.$promise.then(data => { $scope.indexEdit = -1; $scope.isSaved = true; })
                .catch((error, response) => { $scope.isError = true });

        }
        let openModal = $uibModal => {
            return $uibModal.open(
                {
                    templateUrl: "/shared/modal/myModal.html",
                    controller: 'ModalController'
                });
        }

    }).config(function ($uibModalProvider) {
        $uibModalProvider.options.windowClass = 'show';
        $uibModalProvider.options.backdropClass = 'show';
    });
