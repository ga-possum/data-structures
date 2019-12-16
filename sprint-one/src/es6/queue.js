class Queue {
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var len = Object.keys(this.storage).length;
    this.storage[len] = value;
  }

  dequeue() {
    var a = this.storage[0];
    var len = Object.keys(this.storage).length;
    for (let i = 0; i < len - 1; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[len - 1];
    //console.log(this);
    return a;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
