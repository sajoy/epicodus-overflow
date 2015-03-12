epicodusOverflow.controller('ErrorCtrl', function ErrorCtrl($scope, $stateParams, $firebase, $firebaseObject, $firebaseArray, ErrorsFactory, UtilitiesFactory) {

  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.error = UtilitiesFactory.findById($stateParams.errorId);

  $scope.ErrorsFactory = ErrorsFactory;

});
