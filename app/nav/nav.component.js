(function() {

    var getNavCmp = {
        templateUrl: 'app/nav/nav.html',
        controller: ctrl,
        bindings: {
            projectName: '@'
        }
    };

    function ctrl() {
        var $ctrl = this;

        $ctrl.$onInit = function(){

            $ctrl.projectNameLocal = angular.copy($ctrl.projectName);
            $ctrl.config = 'myConfig';
    }
}


    ctrl.$inject = [];
    angular.module('gtec').component('getNavCmp', getNavCmp);

})();