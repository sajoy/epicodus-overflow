epicodusOverflow.controller('NavbarCtrl', function NavbarCtrl($scope, $state, ErrorsFactory, UtilitiesFactory) {
  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.utilities = UtilitiesFactory.utilities;
  $scope.ErrorsFactory = ErrorsFactory;



});
