angular.module('gtec',[]);
angular.module('gtec').controller('gCtrl',function($scope) {

    var $ctrl=this; //vm is changed at $ctrl
    //Creat table list
        $ctrl.list =[
            {Name:"Khaireddine"},
            {Age:"27 years"},
            {Adresse:"City El Khadhra Tunis"},
            {Name:"Hamdi"},
            {Age:"23 years"},
            {Adresse:"City Olympic Tunis"}
        ];
    $ctrl.name = 'GTEC Group';
    $ctrl.depuis  = 2000;

});

/*angular.module('gtec').controller('g1Ctrl',function($scope) {
   
   var $ctrl=this;
    $ctrl.name = 'GTEC international';
    $ctrl.adresse  = "Manzah 6";

});*/