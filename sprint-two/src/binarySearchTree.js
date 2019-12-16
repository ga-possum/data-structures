var BinarySearchTree = function(value) {
  var newTree = Object.create(binaryTreeMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  //will break down if values equal to parent.value
  if (value < this.value) {
    //left
    if (this.left) {
      binaryTreeMethods.insert.call(this.left,value)
    } else {
    this.left = BinarySearchTree(value);
    }
  } else {
    //right
    if (this.right) {
      binaryTreeMethods.insert.call(this.right,value)
    } else {
    this.right = BinarySearchTree(value);
    }
  }
};

binaryTreeMethods.contains = function(target) {
  var child;
  var found = false;
  if (this.value === target) {
    found = true;
  } else if (this.left || this.right){
    for (var i = 0; i < 2; i++) {
      if (i === 0) {child = this.left} else {child = this.right}
      if (!found){
        found = binaryTreeMethods.contains.call(child, target);
      }
    }
  }
  return found;
};

binaryTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left || this.right){
    for (var i = 0; i < 2; i++) {
      if (i === 0) {child = this.left} else {child = this.right}
      if (child) {
        binaryTreeMethods.depthFirstLog.call(child, callback);
      }
    }
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
