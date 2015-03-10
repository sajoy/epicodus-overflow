epicodusOverflow.controller('RepliesCtrl', function RepliesCtrl($scope, $stateParams, ErrorsFactory, UtilitiesFactory, $firebaseArray, $firebaseObject) {

  $scope.UtilitiesFactory = UtilitiesFactory;

  $scope.addReply = function() {
    if ($scope.error.replies[0].message === "Put in some comments!") {
      $scope.error.replies[0].remove();
    }

    $scope.error.replies.$push({
      name: $scope.replyName,
      message: $scope.replyMessage,
      time: (new Date()).toString(),
      upvote: 0
    });
  }
});
