epicodusOverflow.controller('ErrorCtrl', function ErrorsCtrl($scope, $stateParams, ErrorsFactory, UtilitiesFactory) {

  $scope.error = UtilitiesFactory.findById(ErrorsFactory.errors, $stateParams.errorId);
  $scope.errors = ErrorsFactory.errors;
  $scope.ErrorsFactory = ErrorsFactory;
  $scope.UtilitiesFactory = UtilitiesFactory;

});
