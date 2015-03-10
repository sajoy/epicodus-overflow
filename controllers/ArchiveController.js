epicodusOverflow.controller('ArchiveCtrl', function ArchiveCtrl($scope, ErrorsFactory, UtilitiesFactory) {
  $scope.errors = ErrorsFactory.errors;
  $scope.ErrorsFactory = ErrorsFactory;
  $scope.UtilitiesFactory = UtilitiesFactory;


  $scope.priorYears = function() {
    var oldest = [];
    var today = new Date();
    var year = today.getYear();
    $scope.errors.forEach (function(error) {
      if (error.timeInt.getYear() !== year) {
        oldest.push(error);
      }
    });
    return oldest;
  };

  $scope.priorMonths = function() {
    var older = [];
    var today = new Date();
    var year = today.getYear();
    var month = today.getMonth();
    $scope.errors.forEach (function(error) {
      if (error.timeInt.getYear() === year && error.timeInt.getMonth() !== month) {
        older.push(error);
      }
    });
    return older;
  };

  $scope.thisMonth = function() {
    var oldish = [];
    var today = new Date();
    var year = today.getYear();
    var month = today.getMonth();
    $scope.errors.forEach (function(error) {
      if (error.timeInt.getYear() === year && error.timeInt.getMonth() === month) {
        oldish.push(error);
      }
    });
    return oldish;
  };


});
