var Stack = function() {
  this
};
Stack.prototype.push = function(value) {
  var len = Object.keys(this).length
  this[len] = value;
  console.log(this);
};

Stack.prototype.pop = function() {
  var len = Object.keys(this).length
  var a = this[len-1];
  delete this[len-1]
  console.log(this);
  return a;
};

Stack.prototype.size = function() {
   return Object.keys(this).length;
};

