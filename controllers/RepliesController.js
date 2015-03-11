epicodusOverflow.controller('RepliesCtrl', function RepliesCtrl(
  $scope, $stateParams, ErrorsFactory, UtilitiesFactory, $firebaseArray, $firebaseObject) {

  $scope.UtilitiesFactory = UtilitiesFactory;

  $scope.ErrorsFactory = ErrorsFactory;
  $scope.errors = $scope.ErrorsFactory.errorsRef;
  $scope.error = UtilitiesFactory.findById($stateParams.errorId); // object

  var repliesRef = new Firebase("https://popping-fire-4683.firebaseio.com/Replies");
  var sync = $firebaseArray(repliesRef);
  $scope.replies = sync;

  var errorRef = $scope.errors.child($scope.error.$id + "/replies");
  var syncReply = $firebaseArray(errorRef);
  $scope.reply = syncReply;


  //  repliesRef.on("child_added", function() {
  //    $scope.errors.child($scope.error.$id).once("value", function() {
  //      $scope.reply.$add(true);
  //    });
  //  });

  $scope.addReply = function() {

    var newReplyRef = $scope.replies.$add({
      name: $scope.replyName,
      message: $scope.replyMessage,
      time: (new Date()).toString(),
      upvote: 0,
      error: $scope.error.$id
    }).then(function(ref) {
      var id = ref.key();

      var deepRef = $scope.errors.child($scope.error.$id + "/replies/" + id ); //grab specific URL to jam id into 1) error's 2) child's 3) reply
      var syncDeepRef = $firebaseObject(deepRef);

      syncDeepRef.foo = true;
      syncDeepRef.$save().then(function(ref) {
        ref.key() === syncDeepRef.$id; // true
      }, function(error) {
        console.log("Error:", error);
      });

    });


  }

});
