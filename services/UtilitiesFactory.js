epicodusOverflow.factory('UtilitiesFactory', function() {
  var factory = {};

  factory.findById = function(collection, id) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i].id == id) {
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
