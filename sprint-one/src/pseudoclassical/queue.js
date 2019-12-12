var Queue = function() {
  this
};

Queue.prototype.enqueue = function(value) {
  var len = Object.keys(this).length
  this[len] = value;
  console.log(this);
};

Queue.prototype.dequeue = function() {
  var a = this[0];
  var len = Object.keys(this).length
  for (let i = 0; i < len-1; i++){
    this[i] = this[i + 1];
  }
  delete this[len-1]
  console.log(this);
  return a;
};

Queue.prototype.size = function() {
   return Object.keys(this).length;
};

