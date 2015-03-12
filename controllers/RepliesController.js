epicodusOverflow.controller('RepliesCtrl', function RepliesCtrl(
  $scope, $stateParams, ErrorsFactory, UtilitiesFactory, $firebaseArray, $firebaseObject) {

  $scope.UtilitiesFactory = UtilitiesFactory;

  $scope.ErrorsFactory = ErrorsFactory;
  $scope.errors = $scope.ErrorsFactory.errorsRef;
  $scope.error = UtilitiesFactory.findById($stateParams.errorId);

  var repliesRef = new Firebase("https://popping-fire-4683.firebaseio.com/Replies1");
  var sync = $firebaseArray(repliesRef);
  $scope.replies = sync;

  $scope.addReply = function() {

    var newReplyRef = $scope.replies.$add({
      name: $scope.replyName,
      message: $scope.replyMessage,
      time: (new Date()).toString(),
      upvote: 0,
      error: $scope.error.$id
    }).then(function(ref) {
      var replyId = ref.key();
      var deepRef = $scope.errors.child($scope.error.$id + "/replies/" + replyId );
      deepRef.set(true);
      syncRepliesChildRef.$save().then(function(ref) {
        ref.key() === syncRepliesChildRef.$id; // true
      });

    });

  }



});
