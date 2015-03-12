epicodusOverflow.controller('ErrorCtrl', function ErrorCtrl($scope, $stateParams, $firebase, $firebaseObject, $firebaseArray, ErrorsFactory, UtilitiesFactory) {

  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.error = UtilitiesFactory.findById($stateParams.errorId);
  $scope.ErrorsFactory = ErrorsFactory;


  // var repliesRef = new Firebase('https://popping-fire-4683.firebaseio.com/Replies1').child(replyId).once('value', function(snap) {
  //  console.log('I fetched a reply!', snap.val());
  // });
  //
  // var repliesRef = new Firebase("https://popping-fire-4683.firebaseio.com/Replies1");
  // var syncRepliesRef = $firebaseArray(repliesRef);
  // var bigRepliesObj = syncRepliesRef;


});
