/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null) { return null; }
    var slow = head;
    var fast = head;
    var firstNode = null;
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
        if (fast === null) {
            return null;
        }
        fast = fast.next;
        if (slow === fast) {
            firstNode = slow;
            break;
        }
    }

    if (firstNode === null) { return firstNode; }

    while (firstNode !== null && head !== null) {
        if (firstNode === head) {
            return firstNode;
        }
        firstNode = firstNode.next;
        head = head.next;
    }
    return null;
};
