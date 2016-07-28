(function(){

    function aboutCtrl($scope){
        var $ctrl = this;

        $ctrl.name = 'About';

    }

    aboutCtrl.$inject = [];
    angular.module('gtec').controller('aboutCtrl',aboutCtrl);

})();