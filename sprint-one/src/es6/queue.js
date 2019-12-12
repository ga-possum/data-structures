class Queue {
  constructor() {
  }
  enqueue = function(value) {
    var len = Object.keys(this).length - 3;
    this[len] = value;
    console.log(this);
  };

  dequeue = function() {
    var a = this[0];
    var len = Object.keys(this).length - 3;
    for (let i = 0; i < len-1; i++){
      this[i] = this[i + 1];
    }
    delete this[len-1]
    console.log(this);
    return a;
  };

  size = function() {
     return Object.keys(this).length - 3;
  };

}
