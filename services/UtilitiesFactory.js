epicodusOverflow.factory('UtilitiesFactory', function(ErrorsFactory, $firebaseObject) {
  var factory = {};


  factory.findById = function(id) {
    var error =  ErrorsFactory.errorsRef.child(id);
    return $firebaseObject(error);
  };

  factory.oneUp = function(item, key) {
    (item[key]+=1).$save();

  }

  return factory;
});
