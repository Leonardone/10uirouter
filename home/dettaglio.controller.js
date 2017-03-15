angular.module('app').controller('dettaglioCtrl', function($scope, $stateParams){

    console.log($stateParams)

    var id= $stateParams.id;
    $scope.amico=$scope.listaAmici[id];
});