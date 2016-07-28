(function(){

    function contactCtrl($scope){
        var $ctrl = this;

        $ctrl.name = 'Contact';

    }

    contactCtrl.$inject = ['$scope'];
    angular.module('gtec').controller('contactCtrl',contactCtrl);

})();