epicodusOverflow.controller('ErrorsCtrl', function ErrorsCtrl($scope, ErrorsFactory) {
  $scope.errors = ErrorsFactory.errors;
  $scope.ErrorsFactory = ErrorsFactory;
});
