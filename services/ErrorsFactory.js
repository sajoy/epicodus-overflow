epicodusOverflow.factory('ErrorsFactory', function ErrorsFactory() {
  var factory = {};
  factory.errors = [];
  factory.addError = function() {
    factory.errors.push({
      title: factory.errorTitle,
      name: factory.errorName,
      message: factory.errorMessage,
      details: factory.errorDetails,
      language: factory.errorLanguage,
      browser: factory.errorBrowser,
      // time: Time.now(), // how to get timestamp with ang?
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
