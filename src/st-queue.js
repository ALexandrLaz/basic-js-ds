//const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor(){
    this.top = null;
  }

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    const lNode = new ListNode(value);
    if (this.top == null) {
      this.top = lNode;
    } else {
      let curent = this.top;
      while (curent.next != null){
        curent = curent.next;
      }
      curent.next = lNode;
    }
  }
  dequeue() {
    let val = this.top.value;
    this.top = this.top.next;
    return val;
  }
}
