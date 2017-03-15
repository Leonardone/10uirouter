angular.module('app').controller('ChisiamoCtrl', function($scope, $state){
   $scope.titolo= $state.current.data.titolo;
})