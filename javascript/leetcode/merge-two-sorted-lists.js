/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var mergeTwoLists = function(headA, headB) {
    let newRoot = new ListNode()
    let newHead = newRoot
    if (!headA && !headB) {
        return null
    }
    while (headA || headB) {
        if (!headA || (headB && headA.val > headB.val)) {
            newHead.val = headB.val
            headB = headB.next
        } else if (!headB || (headB.val >= headA.val)) {
            newHead.val = headA.val
            headA = headA.next
        }
        if (headA || headB) {
            newHead.next = new ListNode()
            newHead = newHead.next
        }
    }
    return newRoot
};
