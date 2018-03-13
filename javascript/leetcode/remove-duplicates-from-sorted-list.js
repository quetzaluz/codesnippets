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
var deleteDuplicates = function(head) {
    rootNode = new ListNode(0)
    rootNode.next = head
    prevHead = rootNode
    var lastVal
    while (prevHead.next !== null) {
        if (prevHead.next.val == lastVal) {
            lastVal = prevHead.next.val
            prevHead.next = prevHead.next.next
        } else {
            lastVal = prevHead.next.val
            prevHead = prevHead.next
        }
    }
    return rootNode.next
};