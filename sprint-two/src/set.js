var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  for (var i in this._storage) {
    if (i === item) {return true}
  }
  return false;
};

setPrototype.remove = function(item) {
  for (var i in this._storage) {
    if (i === item) {delete this._storage[i]}
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
