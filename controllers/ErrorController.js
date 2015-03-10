epicodusOverflow.controller('ErrorCtrl', function ErrorsCtrl($scope, $stateParams, ErrorsFactory, UtilitiesFactory) {

  $scope.errors = ErrorsFactory.errors;
  $scope.error = UtilitiesFactory.findById($stateParams.errorId);
  $scope.ErrorsFactory = ErrorsFactory;
  $scope.UtilitiesFactory = UtilitiesFactory;

});
