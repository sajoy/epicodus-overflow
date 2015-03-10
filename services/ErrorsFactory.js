epicodusOverflow.factory('ErrorsFactory', function ErrorsFactory($firebaseArray, $firebaseObject) {

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
      // replies: ["Put in some comments!"]
      replies: [{name: "Your name here!", message: "Put in some comments!"}]
    });

    factory.errorTitle = null;
    factory.errorName = null;
    factory.errorMessage = null;
    factory.errorDetails = null;
    factory.errorLanguage = null;
    factory.errorBrowser = null;
  }
  //
  // factory.findById = function(id) {
  //   debugger;
  //   var error = factory.errors.$getRecord(id);
  //   error.$loaded().then(function() {
  //     console.log('loaded!');
  //     return error;
  //   });
  // }

  return factory;
});
