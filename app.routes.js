angular.module('app').config(function(
    $stateProvider, $urlRouterProvider){

        $urlRouterProvider.when("/", "/home");
        $urlRouterProvider.otherwise("/");

    $stateProvider.state('home', {
        url:'/home',
        templateUrl: 'home/home.template.html',
        controller:'HomeCtrl',
        data:{
            titolo:'questa è la home page'
        }
       
    }).state('home.dettaglio',{
        url:'/dettaglio/:id/?categoria',
        templateUrl:'home/dettaglio.template.html',
        controller:'dettaglioCtrl'
    })
    
    .state('contatti',{
        url:'/contatti',
        templateUrl:'contatti/contatti.template.html',
         controller:'ContattiCtrl',
        data:{
            titolo:'questa è la pagina contatti',
            citta:'Ancona',
            via:'via di vie',
            cap:02515,

        },
        resolve:{
           contatti: function(ContattiSrv, $timeout){
            return $timeout(function(){
                    return ContattiSrv.getContatti()
            }, 2000)     

        }
        } 
    
    }).state('chisiamo',{
        abstract:true,
        url:'/chisiamo',
        templateUrl:'chisiamo/chisiamo.template.html',
         controller:'ChisiamoCtrl',
        data:{
            titolo:'questa è la pagina di chi siamo'
        }
    })
    .state('chisiamo.about', {
        url:'/about',
        templateUrl:'chisiamo/chisiamo.about.html',



    }).state('chisiamo.mission', {
        url:'/mission',
        templateUrl:'chisiamo/chisiamo.mission.html',})
});