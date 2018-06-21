/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode headA, ListNode headB) {
        if (headA == null && headB == null) {
            return null;
        }
        ListNode newRoot = new ListNode(0);
        ListNode newHead = newRoot;
        while (headA != null || headB != null) {
            if (headA == null || (headB != null && headA.val > headB.val)) {
                newHead.val = headB.val;
                headB = headB.next;
            } else if (headB == null || (headB.val >= headA.val)) {
                newHead.val = headA.val;
                headA = headA.next;
            }
            if (headA != null || headB != null) {
                newHead.next = new ListNode(0);
                newHead = newHead.next;
            }
        }
        return newRoot;
    }
}
