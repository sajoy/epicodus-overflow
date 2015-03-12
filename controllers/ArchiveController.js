epicodusOverflow.controller('ArchiveCtrl', function ArchiveCtrl($scope, ErrorsFactory, UtilitiesFactory) {
  $scope.errors = ErrorsFactory.errors;
  $scope.ErrorsFactory = ErrorsFactory;
  $scope.UtilitiesFactory = UtilitiesFactory;



  $scope.priorYears = function() {
    var oldest = [];
    var today = (new Date()).toString();
    var year = today.split(" ")[3];
    $scope.errors.forEach (function(error) {
      if (error.time.split(" ")[3] !== year) {
        oldest.push(error);
      }
    });
    return oldest;
  };

  $scope.priorMonths = function() {
    var older = [];
    var today = (new Date()).toString();
    var year = today.split(" ")[3];
    var month = today.split(" ")[1];
    $scope.errors.forEach (function(error) {
      if (error.time.split(" ")[3] === year && error.time.split(" ")[1] !== month) {
        older.push(error);
      }
    });
    return older;
  };

  $scope.thisMonth = function() {
    var oldish = [];
    var today = (new Date()).toString();
    var year = today.split(" ")[3];
    var month = today.split(" ")[1];
    $scope.errors.forEach (function(error) {
      if (error.time.split(" ")[3] === year && error.time.split(" ")[1] === month) {
        oldish.push(error);
      }
    });
    return oldish;
  };


});
