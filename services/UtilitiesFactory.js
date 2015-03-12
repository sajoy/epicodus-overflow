epicodusOverflow.factory('UtilitiesFactory', function(ErrorsFactory, $firebaseObject) {
  var factory = {};

  factory.findById = function(id) {
    var error = ErrorsFactory.errorsRef.child(id);
    return $firebaseObject(error);
  };

  return factory;
});
