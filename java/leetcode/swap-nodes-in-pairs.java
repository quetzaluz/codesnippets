/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode start = new ListNode(0, head);
        ListNode pointer = start;
        // Move in pairs and swap
        while (pointer != null && pointer.next != null && pointer.next.next != null) {
            ListNode first = pointer.next;
            ListNode second = first.next;
            first.next = second.next;
            second.next = first;
            pointer.next = second;
            
            // Traverse now that swapping is complete.
            pointer = pointer.next.next;
        }
        return start.next;
    }
}