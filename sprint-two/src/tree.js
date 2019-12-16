
/*
 * Complexity: What is the time complexity of the above functions?
 */



var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var newKid = Tree(value);
  var numberOfKids = this.children.length;
  this.children[numberOfKids] = newKid;
};

treeMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length === 0) {
    return false;
  } else if (this.children.length !== 0) {
    for (let i = 0; i < this.children.length; i++) {
      return treeMethods.contains.call(this.children[i], target);
    }
  }
  return false;
};

treeMethods.contains = function (target) {
  var found = false;
  if (this.value === target) {
    found = true;
  } else if (this.children.length !== 0) {
    var len = this.children.length
    for (var i = 0; i < this.children.length; i++) {
      if (!found){
        var currentChild = this.children[i]
        found = treeMethods.contains.call(currentChild, target);
      }
    }
  }

  return found;
};