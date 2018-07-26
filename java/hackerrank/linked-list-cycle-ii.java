/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        if (head == null) { return null; }
        ListNode slow = head;
        ListNode fast = head;
        ListNode firstNode = null;
        while (fast != null) {
            slow = slow.next;
            fast = fast.next;
            if (fast == null) {
                return null;
            }
            fast = fast.next;
            if (slow == fast) {
                firstNode = slow;
                break;
            }
        }

        if (firstNode == null) { return firstNode; }

        while (firstNode != null && head != null) {
            if (firstNode == head) {
                return firstNode;
            }
            firstNode = firstNode.next;
            head = head.next;
        }
        return null;
    }
}
