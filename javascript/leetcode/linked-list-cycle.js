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
    if (head === null) { return false; }
    var slow = head;
    var fast = head.next;
    while (fast !== slow) {
      if (slow === null || fast === null) {
        return false;
      }
      slow = slow.next;
      fast = fast.next !== null ? fast.next.next : fast.next;
    }
    return true;
};