epicodusOverflow.controller('ErrorsCtrl', function ErrorsCtrl($scope, ErrorsFactory, UtilitiesFactory, $firebaseObject) {

  $scope.errors = ErrorsFactory.errors;
  $scope.ErrorsFactory = ErrorsFactory;
  $scope.UtilitiesFactory = UtilitiesFactory;

  $scope.oneUp = function(error) {
    var errorRef =  ErrorsFactory.errorsRef.child(error.$id);
    $scope.error = $firebaseObject(errorRef);
    errorRef.transaction(function(current_value) {
      current_value.ditto++;
      return current_value;
    });
  }

});
