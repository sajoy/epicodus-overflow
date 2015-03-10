epicodusOverflow.factory('ErrorsFactory', function ErrorsFactory($firebaseArray) {

  var factory = {};
  var ref = new Firebase("https://popping-fire-4683.firebaseio.com/Errors");
  var sync = $firebaseArray(ref);
  factory.errors = sync;

  factory.addError = function() {
    factory.errors.$add({
      title: factory.errorTitle,
      name: factory.errorName,
      message: factory.errorMessage,
      details: factory.errorDetails,
      language: factory.errorLanguage,
      browser: factory.errorBrowser,
      time: (new Date()).toString(),
      ditto: 0,
      replies: []
    });
    factory.errorTitle = null;
    factory.errorName = null;
    factory.errorMessage = null;
    factory.errorDetails = null;
    factory.errorLanguage = null;
    factory.errorBrowser = null;
  }

  return factory;
});
