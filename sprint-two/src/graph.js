// Instantiate a new graph
var Graph = function() {
  var obj = Object.create(Graph.prototype);
  return obj;

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.include(Object.keys(this),node.toString());
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var arr = this[node.toString()];
  //console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    this[arr[i].toString()] = _.without(this[arr[i].toString()],node)
  }
  delete this[node.toString()]

};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.include(this[fromNode.toString()],toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode.toString()].push(toNode);
  this[toNode.toString()].push(fromNode);
  //console.log(this)
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode.toString()] = _.without(this[fromNode.toString()],toNode);
  this[toNode.toString()] = _.without(this[toNode.toString()],fromNode);
  //console.log(this)
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var arr = Object.keys(this)
  for (var i = 0; i < arr.length; i++) {
    cb(parseInt(arr[i]));
  }

};

