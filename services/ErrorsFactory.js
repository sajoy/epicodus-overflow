epicodusOverflow.factory('ErrorsFactory', function ErrorsFactory() {
  var factory = {};
  factory.errors = [
    { id: 1,
      title: "Sample Past Date",
      name: "Jackie",
      message: "testing",
      details: "more details",
      language: "Ruby",
      browser: "Chrome",
      time: "Mon Mar 09 2014",
      timeInt: new Date(2014, 03, 09),
    }
  ];

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
      timeInt: new Date(),
      ditto: 0,
      replies: []
    });
    factory.errorTitle = null;
    factory.errorName = null;
    factory.errorMessage = null;
    factory.errorDetails = null;
    factory.errorLanguage = null;
    factory.errorBrowser = "";
  };

  return factory;
});
