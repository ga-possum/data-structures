var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value); 
    var current; 
  
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else { 
      current = this.head; 
      while (current.next) { 
        current = current.next; 
      } 
    current.next = node;
    this.tail = node; 
    } 
    
  };

  list.removeHead = function() {
    var currentHead = this.head;
    this.head = this.head.next;
    return currentHead.value;
  };

  list.contains = function(target) {
    var container;  //think of empty list
    if (arguments[1]) {
      container = arguments[1];
    } else {
      container = this.head;
    }
    if (container.value === target) {
      return true;
    } else {
      if (container.next) {
       return list.contains(target, container.next)
      }
    }
    return false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  return node;
  
};
