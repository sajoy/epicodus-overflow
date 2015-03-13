epicodusOverflow.controller('ErrorCtrl', function ErrorCtrl($scope, $state, $stateParams, $firebase, $firebaseObject, $firebaseArray, ErrorsFactory, UtilitiesFactory) {

  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.currentError = UtilitiesFactory.findById($stateParams.errorId);
  $scope.ErrorsFactory = ErrorsFactory;
  $scope.errorFId = $scope.currentError.$id;
  $scope.errors = $scope.ErrorsFactory.errorsRef;

  var repliesRef = new Firebase("https://popping-fire-4683.firebaseio.com/Replies");
  var syncRepliesRef = $firebaseArray(repliesRef);
  $scope.Replies = syncRepliesRef;

  $scope.addReply = function() {
    $scope.currentError = UtilitiesFactory.findById($stateParams.errorId);
    var newReplyRef = $scope.Replies.$add({
      name: $scope.replyName,
      message: $scope.replyMessage,
      time: (new Date()).toString(),
      upvote: 0,
      error: $scope.currentError.$id
    }).then(function(ref) {
      var replyId = ref.key();
      var deepRef = $scope.errors.child($scope.currentError.$id + "/replies/" + replyId );
      deepRef.set(true);
    });

    $scope.replyName = null;
    $scope.replyMessage = null;
  }


});
