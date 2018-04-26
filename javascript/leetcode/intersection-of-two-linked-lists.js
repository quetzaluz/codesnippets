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
var getIntersectionNode = function(headA, headB) {
        pATraversals = 0
        pBTraversals = 0
        rootA = new ListNode(0)
        rootA.next = headA
        rootB = new ListNode(0)
        rootB.next = headB
        pA = headA
        pB = headB
        while (pATraversals < 2 && pBTraversals < 2) {
            if (pA && pB && pA.val == pB.val) {
                return pA
            }
            if (pA === null || pA.next === null) {
                pA = rootB.next
                pATraversals += 1
            } else {
                pA = pA.next
            }
            if (pB === null || pB.next === null) {
                pB = rootA.next
                pBTraversals += 1
            } else {
                pB = pB.next
            }
        }
        return
};
