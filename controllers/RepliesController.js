epicodusOverflow.controller('RepliesCtrl', function RepliesCtrl($scope, $stateParams, ErrorsFactory, UtilitiesFactory, $firebaseArray, $firebaseObject) {

  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.ErrorsFactory = ErrorsFactory;

  $scope.errors = $scope.ErrorsFactory.errorsRef;

  $scope.addReply = function(errorId) {

    var repliesRef = new Firebase("https://popping-fire-4683.firebaseio.com/Errors1/" + errorId + "/replies");
    var sync = $firebaseArray(repliesRef);

    var errorRepliesRef = $scope.errors.child(errorId).child("replies");

    $scope.error.replies.$push({
      name: $scope.replyName,
      message: $scope.replyMessage,
      time: (new Date()).toString(),
      upvote: 0
    });
  }
});
