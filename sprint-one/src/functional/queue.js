var Queue = function() {
  var someInstance = {};
  var storage = {};

  someInstance.enqueue = function(value) {
    var len = Object.keys(storage).length
    storage[len] = value;
    console.log(storage);
  };

  someInstance.dequeue = function() {
    var a = storage[0];
    var len = Object.keys(storage).length
    for (let i = 0; i < len-1; i++){
      storage[i] = storage[i + 1];
    }
    delete storage[len-1]
    console.log(storage);
    return a;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
// queue-specific behavior
// removes the least recently added of two items‣
// AssertionError: expected 'b' to equal 'a'
// removes the oldest item, after newer items have already been added and removed‣
// AssertionError: expected 'c' to equal 'b'
