class Stack {
  constructor() {
    this.storage = {};
  }

  push (value) {
    var len = Object.keys(this.storage).length;
    this.storage[len] = value;
  }

  pop () {
    var len = Object.keys(this.storage).length;
    var a = this.storage[len - 1];
    delete this.storage[len - 1];
    return a;
  }

  size () {
    return Object.keys(this.storage).length;
  }
}
