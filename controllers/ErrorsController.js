epicodusOverflow.controller('ErrorsCtrl', function ErrorsCtrl($scope, ErrorsFactory, UtilitiesFactory, $firebaseObject) {

  $scope.errors = ErrorsFactory.errors;
  $scope.ErrorsFactory = ErrorsFactory;
  $scope.UtilitiesFactory = UtilitiesFactory;

  $scope.todaysErrors = function() {
    var todays = [];
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getYear();
    $scope.errors.forEach( function(error) {
      if (error.timeInt.getDate() === day && error.timeInt.getMonth() === month && error.timeInt.getYear() === year) {
        todays.push(error)
      }
    });
    return todays;
  };

  $scope.oneUp = function(error) {
    var errorRef =  ErrorsFactory.errorsRef.child(error.$id);
    $scope.error = $firebaseObject(errorRef);
    errorRef.transaction(function(current_value) {
      current_value.ditto++;
      return current_value;
    });
  }

});
