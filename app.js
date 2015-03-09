var epicodusOverflow = angular.module('epicodusOverflow', ['ui.router']);

epicodusOverflow.config(function($stateProvider) {
  $stateProvider.state('errors', {
    url:"",
    templateUrl: "partials/errors.html"
  });
});
