epicodusOverflow.controller('RepliesCtrl', function RepliesCtrl(
  $scope, $stateParams, ErrorsFactory, UtilitiesFactory, $firebaseArray, $firebaseObject) {

  $scope.UtilitiesFactory = UtilitiesFactory;

  $scope.ErrorsFactory = ErrorsFactory;
  $scope.errors = $scope.ErrorsFactory.errorsRef;
  $scope.error = UtilitiesFactory.findById($stateParams.errorId);
  $scope.errorFId = $scope.error.$id;

  var repliesRef = new Firebase("https://popping-fire-4683.firebaseio.com/Replies1");
  var syncRepliesRef = $firebaseArray(repliesRef);
  var bigRepliesObj = syncRepliesRef;
  $scope.Replies1 = syncRepliesRef;

  $scope.addReply = function() {
    $scope.error = UtilitiesFactory.findById($stateParams.errorId);
    var errorFId = $scope.error.$id;

    var newReplyRef = bigRepliesObj.$add({
      name: $scope.replyName,
      message: $scope.replyMessage,
      time: (new Date()).toString(),
      upvote: 0,
      error: $scope.error.$id
    }).then(function(ref) {
      var replyId = ref.key();
      var deepRef = $scope.errors.child($scope.error.$id + "/replies/" + replyId );
      deepRef.set(true);

      new Firebase('https://popping-fire-4683.firebaseio.com/Replies1').child(replyId).once('value', function(snap) {
       console.log('I fetched a reply!', snap.val());
      });
    });
  }


});
