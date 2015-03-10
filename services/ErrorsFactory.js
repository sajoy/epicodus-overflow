epicodusOverflow.factory('ErrorsFactory', function ErrorsFactory() {
  var factory = {};
  factory.errors = [];
  factory.addError = function() {
    factory.errors.push({
      id: factory.errors.length + 1,
      title: factory.errorTitle,
      name: factory.errorName,
      message: factory.errorMessage,
      details: factory.errorDetails,
      language: factory.errorLanguage,
      browser: factory.errorBrowser,
      time: (new Date()).toString(),
      timeInt: (new Date()),
      ditto: 0,
      replies: []
    });
    factory.errorTitle = null;
    factory.errorName = null;
    factory.errorMessage = null;
    factory.errorDetails = null;
    factory.errorLanguage = null;
    factory.errorBrowser = null;
  };

  return factory;
});
