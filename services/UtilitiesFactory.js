epicodusOverflow.factory('UtilitiesFactory', function(ErrorsFactory) {
  var factory = {};

  factory.findById = function(id) {
    var collection = ErrorsFactory.errors;
    debugger;
    for (var i = 0; i < collection.length; i++) {
      if (collection[i].$id == id) {
        return collection[i];
      }
    }
    return null;
  };

  factory.oneUp = function(item, key) {
    item[key]+=1;
  }

  return factory;
});
