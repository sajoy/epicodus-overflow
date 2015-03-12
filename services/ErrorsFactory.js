epicodusOverflow.factory('ErrorsFactory', function ErrorsFactory($firebaseArray, $firebaseObject) {

  var factory = {};
  factory.errorsRef = new Firebase("https://popping-fire-4683.firebaseio.com/Errors");
  var sync = $firebaseArray(factory.errorsRef);
  factory.errors = sync;

  factory.addError = function() {
    factory.errors.$add({
      title: factory.errorTitle,
      name: factory.errorName,
      message: factory.errorMessage,
      details: factory.errorDetails,
      language: factory.errorLanguage,
      browser: factory.errorBrowser,
      time: (new Date()).toString().slice(0, 15),
      ditto: 0
    });

    factory.errorTitle = null;
    factory.errorName = null;
    factory.errorMessage = null;
    factory.errorDetails = null;
    factory.errorLanguage = null;
    factory.errorBrowser = "Chrome";
  };

  return factory;
});
