epicodusOverflow.controller('ErrorCtrl', function ErrorCtrl($scope, $stateParams, $firebase, $firebaseObject, $firebaseArray, ErrorsFactory, UtilitiesFactory) {

  // var errorRef = new Firebase("https://popping-fire-4683.firebaseio.com/Errors1/" + $id);
  // var obj = $firebaseObject(errorRef)

  $scope.errors = ErrorsFactory.errors;
  var error =  ErrorsFactory.errorsRef.child($stateParams.errorId);
  $scope.error = $firebaseObject(error);

  $scope.ErrorsFactory = ErrorsFactory;
  $scope.UtilitiesFactory = UtilitiesFactory;

});
