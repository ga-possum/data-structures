class Stack {
  constructor() {

  }

  push = function(value) {
    var len = Object.keys(this).length - 3;
    this[len] = value;

  };

  pop = function() {
    var len = Object.keys(this).length - 3;
    var a = this[len-1];
    delete this[len-1];
    return a;
  };

  size = function() {
    return Object.keys(this).length - 3;
  }



}
