const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
    this.lastCheckedNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const additionNode = new Node(data);
    
    function recursiveAdder(targetNode, additionNode) {
      if (additionNode.data > targetNode.data) {
        if (targetNode.right) {
          recursiveAdder(targetNode.right, additionNode);
        } else targetNode.right = additionNode;
      } else {
        if (targetNode.left) recursiveAdder(targetNode.left, additionNode);
        else targetNode.left = additionNode;
      } 
    }

    //if root not exist
    if (!this.root()) {
      this.rootNode = additionNode;
    } else recursiveAdder(this.rootNode, additionNode);
   }

  has(data) {
    function recursiveHasChecker(checkedNode, data) {
      if (checkedNode) {
        if (checkedNode.data === data) {
          //lastCheckedNode = checkedNode;
          return true;
        } else if (data > checkedNode.data) {
          return recursiveHasChecker (checkedNode.right, data);
        } else if (data < checkedNode.data) {
          return recursiveHasChecker (checkedNode.left, data); 
        } 
      } else return false;
    }
    return recursiveHasChecker(this.rootNode, data);
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};