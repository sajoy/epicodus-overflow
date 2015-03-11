epicodusOverflow.controller('ErrorCtrl', function ErrorsCtrl($scope, $stateParams, $firebase, $firebaseObject, $firebaseArray, ErrorsFactory, UtilitiesFactory) {

  $scope.errors = ErrorsFactory.errors;
  var error =  ErrorsFactory.errorsRef.child($stateParams.errorId);
  $scope.error = $firebaseObject(error);

  $scope.ErrorsFactory = ErrorsFactory;
  $scope.UtilitiesFactory = UtilitiesFactory;

});
