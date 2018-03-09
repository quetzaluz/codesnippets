/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    rootNode = new ListNode(0) // mostly for help in returning list, slicing off first elem
    rootNode.next = head
    prevHead = rootNode
    while (prevHead.next !== null) {
        if (prevHead.next.val == val) {
            prevHead.next = prevHead.next.next
        } else {
            prevHead = prevHead.next
        }
    }
    return rootNode.next
};