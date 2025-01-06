const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, number) {
  let cleanResults = [];
  let listNode = list;
  let result = null;
  
  while (listNode) {
    const currentVal = listNode.value;
    if (currentVal !== number) {
      cleanResults.push(currentVal);
    }
    listNode = listNode.next;
  }
  let currentNode = result;

  for (let i = 0; i < cleanResults.length; i++) {
    let currentValue = cleanResults[i];
    let additionalNode = new ListNode(currentValue);

    if (result) {
      currentNode.next = additionalNode;
    } else {
      result = additionalNode;
    }
      currentNode = additionalNode;
  }
  return result;
}   
   

module.exports = {
  removeKFromList
};
