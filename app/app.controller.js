(function(){

    function appCtrl($scope){
        var $ctrl = this;
        $ctrl.name = 'AppName from appCtrl';
    }

    appCtrl.$inject = ['$scope'];
    angular.module('gtec').controller('appCtrl', appCtrl);

})();