epicodusOverflow.controller('ErrorsCtrl', function ErrorsCtrl($scope, ErrorsFactory, UtilitiesFactory, $firebaseObject) {

  $scope.errors = ErrorsFactory.errors;
  $scope.ErrorsFactory = ErrorsFactory;
  $scope.UtilitiesFactory = UtilitiesFactory;

  $scope.todaysErrors = function() {
    var todays = [];
    var today = (new Date()).toString();
    var day = today.split(" ")[2];
    var month = today.split(" ")[1];
    var year = today.split(" ")[3];
    $scope.errors.forEach( function(error) {
      if (error.time.split(" ")[2] === day && error.time.split(" ")[1] === month && error.time.split(" ")[3] === year) {
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
