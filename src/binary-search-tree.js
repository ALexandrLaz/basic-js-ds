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
    return this.find(data) ? true : false;
  }

  find(data) {
    let now = this.node;
    while (now !== null) {
      if (now.data === data) {
        return now;
      } else {
        if (now.data < data) {
          now = now.right;
        } else if (now.data > data) {
          now = now.left
        }
      }
    }
    return null
  }

  remove(data) {
    this.node = removeNode(data, this.node);
    function removeNode(data, cop){
      if(cop == null){
        return null
      }else if(cop.data < data){
        cop.right = removeNode(data, cop.right);
        return cop;
      }else if(cop.data > data){
        cop.left = removeNode(data, cop.left);
        return cop;
      }else{
        if(cop.left == null && cop.right == null){
          cop = null;
          return cop
        }
        if(cop.left == null){
          cop = cop.right;
          return cop;
        }else if(cop.right == null){
          cop = cop.left;
          return cop;
        }
        let newNode = minNode(cop.right);
          cop.data = newNode.data;
          cop.right = removeNode(newNode.data, cop.right);
          return cop;
      }
    }
    function minNode(node) {
      if (node.left === null){
          return node;
      }else{
          return minNode(node.left);
      }
    }
  }


  min() {
    let cop = this.node;
    while(cop.left != null) cop = cop.left;
    return cop.data
  }

  max() {
    let cop = this.node;
    while(cop.right != null) cop = cop.right;
    return cop.data
  }

}