epicodusOverflow.controller('ErrorCtrl', function ErrorCtrl($scope, $stateParams, $firebase, $firebaseObject, $firebaseArray, ErrorsFactory, UtilitiesFactory) {

  // var errorRef = new Firebase("https://popping-fire-4683.firebaseio.com/Errors1/" + $id);
  // var obj = $firebaseObject(errorRef)

  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.error = UtilitiesFactory.findById($stateParams.errorId);

  $scope.ErrorsFactory = ErrorsFactory;

});
