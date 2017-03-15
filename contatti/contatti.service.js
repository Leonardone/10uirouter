angular.module('app').service('ContattiSrv', function(){
    var contatti={
        citta:"Ancona",
        via:"Via delle vie",
        nazione:"Italia"
    };
    var getContatti = function(){
        return contatti
    }



    return{
        getContatti:getContatti
    }
});