epicodusOverflow.controller('ErrorsCtrl', function ErrorsCtrl($scope, ErrorsFactory, UtilitiesFactory) {

  $scope.errors = ErrorsFactory.errors;
  $scope.ErrorsFactory = ErrorsFactory;
  $scope.UtilitiesFactory = UtilitiesFactory;

});
