epicodusOverflow.controller('ErrorsCtrl', function ErrorsCtrl($scope, ErrorsFactory, UtilitiesFactory) {


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





});
