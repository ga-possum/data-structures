var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me . //or may be array???

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  var numberOfKids = this.children.length;
  this.children[numberOfKids] = newChild;
  //console.log(this)
};

treeMethods.contains = function(target) {
  var child;
  var found = false;
  var n = this;
  if (this.value === target) {
    found = true;
  } else if (this.children.length !== 0) {
    var len = this.children.length;
    for (var i = 0; i < len; i++) {
        if (found) {return true}
        child = this.children[i]
        console.log(child.value)
        if (child.value === target) {
            found = true;
        } else if (child.children.length !== 0) {
            found = treeMethods.contains.call(child,target);
        }
    }
  }
  return found;
};

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