(function(){

function config($routeProvider){

    $routeProvider
    .when('/',{
        templateUrl:'app/home/home.html',
        controller:'homeCtrl',
        controllerAs:'vm'
    })
    .when('/about',{
        templateUrl:'app/about/about.html',
        controller:'aboutCtrl',
        controllerAs:'vm'
    })
    .when('/contact',{
        templateUrl:'app/contact/contact.html',
        controller:'contactCtrl',
        controllerAs:'vm'
    })
    .otherwise({redirectTo:'/'});
}

config.$inject = ['$routeProvider'];

angular.module('gtec').config(config);

})();