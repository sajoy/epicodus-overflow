epicodusOverflow.controller('ErrorCtrl', function ErrorCtrl($scope, $stateParams, $firebase, $firebaseObject, $firebaseArray, ErrorsFactory, UtilitiesFactory) {

  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.currentError = UtilitiesFactory.findById($stateParams.errorId);
  $scope.ErrorsFactory = ErrorsFactory;
  $scope.errorFId = $scope.currentError.$id;

  var repliesRef = new Firebase("https://popping-fire-4683.firebaseio.com/Replies");
  var syncRepliesRef = $firebaseArray(repliesRef);
  $scope.Replies = syncRepliesRef;

});
