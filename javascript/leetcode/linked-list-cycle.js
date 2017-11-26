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
    var candidates = {}
    while (head) {
      if (candidates[head.val]) {
        return true
      } else {
        candidates[head.val] = 1
      }
      head = head.next
    }
    return false
};