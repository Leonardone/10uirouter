angular.module('app').controller('HomeCtrl', function($scope, $state){
   $scope.titolo= $state.current.data.titolo;


   $scope.listaAmici=[{
       id:0,
       nome:'Scemodimmerda'
   },{
       id:1,
       nome:'Leo'
    },{
        id:2,
        nome: 'Baldo'
    },{
        id:3,
        nome:'Clodoaldo'
   }];
})