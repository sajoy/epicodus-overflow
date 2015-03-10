epicodusOverflow.controller('ArchiveCtrl', function ArchiveCtrl($scope, ErrorsFactory, UtilitiesFactory) {
  $scope.errors = ErrorsFactory.errors;
  $scope.ErrorsFactory = ErrorsFactory;
  $scope.UtilitiesFactory = UtilitiesFactory;

});
