angular.module('app').controller('ContattiCtrl', 
function(
    $scope,
    $state,
    contatti){
            $scope.titolo= $state.current.data.titolo;
            $scope.citta= $state.current.data.citta;
            $scope.via= $state.current.data.via;
            $scope.cap= $state.current.data.cap;

            $scope.contatti=contatti;



})