epicodusOverflow.controller('RepliesCtrl', function RepliesCtrl($scope, $stateParams, ErrorsFactory, UtilitiesFactory) {

  $scope.UtilitiesFactory = UtilitiesFactory;

  $scope.addReply = function() {
    $scope.error.replies.push({
      name: $scope.replyName,
      message: $scope.replyMessage,
      time: (new Date()).toString(),
      upvote: 0
    });
  }
});
