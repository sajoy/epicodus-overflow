epicodusOverflow.factory('UtilitiesFactory', function() {
  return {
    findById: function(collection, id) {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i].id == id) {
          return collection[i];
        }
      }
      return null;
    }
  };
    // oneUp: function(item) {
    //   item.popularity++;
    // }


});
