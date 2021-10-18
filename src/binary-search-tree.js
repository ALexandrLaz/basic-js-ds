const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor(){
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    this.node = addTreeElem(this.node, data);
    function addTreeElem(prev, data){
      if(prev == null){
        return new Node(data);
      }else if(prev.data > data){
        prev.left = addTreeElem(prev.left, data);
      }else if(prev.data < data){
        prev.right = addTreeElem(prev.right, data);
      }
      return prev;
    }
  }

  has(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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