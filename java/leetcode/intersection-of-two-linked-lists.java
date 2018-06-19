/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int pATraversals = 0;
        int pBTraversals = 0;
        ListNode rootA = new ListNode(0);
        rootA.next = headA;
        ListNode rootB = new ListNode(0);
        rootB.next = headB;
        ListNode pA = headA;
        ListNode pB = headB;
        while (pATraversals < 2 && pBTraversals < 2) {
            if (pA != null && pB != null && pA.val == pB.val) {
                return pA;
            }
            if (pA == null || pA.next == null) {
                pA = rootB.next;
                pATraversals += 1;
            } else {
                pA = pA.next;
            }
            if (pB == null || pB.next == null) {
                pB = rootA.next;
                pBTraversals += 1;
            } else {
                pB = pB.next;
            }
        }
        return null; // intersection guaranteed in prompt, just default return
    }
}
