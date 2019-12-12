var Stack = function() {
  var someInstance = {};
  var storage = {};

  someInstance.push = function(value) {
    var len = Object.keys(storage).length
    storage[len] = value;
    console.log(storage);
  };

  someInstance.pop = function() {
    var len = Object.keys(storage).length
    var a = storage[len-1];


    delete storage[len-1]
    console.log(storage);
    return a;
  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};



