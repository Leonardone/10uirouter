angular.module('app').controller('HomeCtrl', function($scope, $state){
   $scope.titolo= $state.current.data.titolo;
})