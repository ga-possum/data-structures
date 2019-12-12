var Stack = function() {
  var storage = {};
  storage.push = stackMethods.push;
  storage.pop = stackMethods.pop;
  storage.size = stackMethods.size;
  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var len = Object.keys(this).length - 3
  this[len] = value;
  console.log(this);
};

stackMethods.pop = function() {
  var len = Object.keys(this).length - 3
  var a = this[len-1];
  delete this[len-1]
  console.log(this);
  return a;
};

stackMethods.size = function() {
   return Object.keys(this).length - 3;
};
