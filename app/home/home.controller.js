(function(){

    function homeCtrl($scope){
        var $ctrl = this;

        $ctrl.name = 'Home';

    }

    homeCtrl.$inject = ['$scope'];
    angular.module('gtec').controller('homeCtrl',homeCtrl);

})();