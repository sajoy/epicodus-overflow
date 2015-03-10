epicodusOverflow.factory('ErrorsFactory', function ErrorsFactory($firebaseArray) {

  var factory = {};
  var ref = new Firebase("https://popping-fire-4683.firebaseio.com/");
  var sync = $firebaseArray(ref);
  // var syncArray = sync.$asArray();
  factory.errors = sync;

  factory.addError = function() {
    factory.errors.$add({
      // id: factory.errors.length + 1,
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
