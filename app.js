var epicodusOverflow = angular.module('epicodusOverflow', ['ui.router', 'firebase']);

epicodusOverflow.config(function($stateProvider) {

  $stateProvider.state('errors', {
    url:"",
    templateUrl: "partials/errors.html",
    controller: "ErrorsCtrl"
  });

  $stateProvider.state('error', {
    url:"/error/:errorId",
    templateUrl: "partials/error.html",
    controller: "ErrorCtrl"
  });

  $stateProvider.state('error.replies', {
    url:"/replies",
    templateUrl: "partials/error.replies.html",
    controller: "RepliesCtrl"
  });

});
