angular.module("myyModal", ['ui.bootstrap'])
    .controller("ModalController", function ($uibModalInstance, $scope) {
        console.log("In modalcontroller", $uibModalInstance,"%%",$scope.category);
        $scope.ok = () => $uibModalInstance.close(true);
        $scope.cancel = () =>  $uibModalInstance.dismiss('cancel'); 
    })