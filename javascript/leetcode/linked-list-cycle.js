/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var candidates = []
    var currentNode = head
    while (currentNode) {
      if (candidates.indexOf(currentNode.val) >= 0) {
        return true
      } else {
        candidates.push(currentNode.val)
      }
      currentNode = currentNode.next
    }
    return false
};