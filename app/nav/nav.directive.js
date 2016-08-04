(function(){

    function navCtrl(){
       return {
            restrict : 'EA',
            templateUrl : 'app/nav/nav.html',
            scope:{
                projectName: '@'
            }
       };

    }

    navCtrl.$inject = [];
    angular.module('gtec').directive('gtecNav', navCtrl);

})();