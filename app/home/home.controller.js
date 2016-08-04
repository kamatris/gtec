(function(){

    function homeCtrl($scope, AppService, AppService1){
        var $ctrl = this;

        $ctrl.name = 'Home';
         AppService1.getAll()
         .then(function(data){
             $ctrl.list = data;
         });
    }

    homeCtrl.$inject = ['$scope','AppService', 'AppService1'];





    
    angular.module('gtec').controller('homeCtrl', homeCtrl);

})();