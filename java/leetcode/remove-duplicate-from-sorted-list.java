/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode rootNode = new ListNode(head != null ? head.val - 1 : 0);
        rootNode.next = head;
        ListNode prevHead = rootNode;
        while (prevHead != null) {
            if (prevHead.next != null && prevHead.val == prevHead.next.val) {
                prevHead.next = prevHead.next.next;
            } else {
                prevHead = prevHead.next;
            }
        }
        return rootNode.next;
    }
}
