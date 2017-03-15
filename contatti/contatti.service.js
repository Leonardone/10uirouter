angular.module('app').service('ContattiSrv', function(){
    var contatti={
        citta:"Ancona",
        cap: 02515,
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