// var Set = function() {
//   var set = Object.create(setPrototype);
//   set._storage = {}; // fix me
//   return set;
// };

// var setPrototype = {};

// setPrototype.add = function(item) {
//   this._storage[item] = true;
// };

// setPrototype.contains = function(item) {
//   for (var i in this._storage) {
//     if (i === item) {return true}
//   }
//   return false;
// };

// setPrototype.remove = function(item) {
//   for (var i in this._storage) {
//     if (i === item) {delete this._storage[i]}
//   }
// };

var Set = function() {
  var set = Object.create(setPrototype);
  set._limit = 100;
  set._storage = LimitedArray(set._limit);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  this._storage.set(index, true);
  // var index = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.set(index, v, k);
};

setPrototype.contains = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  if (this._storage.get(index)) {return true;}
  return false;
};

setPrototype.remove = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  this._storage.set(index, false);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
