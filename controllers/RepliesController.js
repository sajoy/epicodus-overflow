epicodusOverflow.controller('RepliesCtrl', function RepliesCtrl(
  $scope, $state, $stateParams, ErrorsFactory, UtilitiesFactory, $firebaseArray, $firebaseObject) {

  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.ErrorsFactory = ErrorsFactory;

  $scope.errors = $scope.ErrorsFactory.errorsRef;
  $scope.error = UtilitiesFactory.findById($stateParams.errorId);

  var repliesRef = new Firebase("https://popping-fire-4683.firebaseio.com/Replies");
  var syncRepliesRef = $firebaseArray(repliesRef);
  var bigRepliesObj = syncRepliesRef;

  $scope.addReply = function() {
    $scope.error = UtilitiesFactory.findById($stateParams.errorId);
    var newReplyRef = bigRepliesObj.$add({
      name: $scope.replyName,
      message: $scope.replyMessage,
      time: (new Date()).toString(),
      upvote: 0,
      error: $scope.error.$id
    }).then(function(ref) {
      var replyId = ref.key();
      var deepRef = $scope.errors.child($scope.error.$id + "/replies/" + replyId ); //in here $scope.error only returns id
      deepRef.set(true);
    });

    $scope.replyName = null;
    $scope.replyMessage = null;
  }

});
