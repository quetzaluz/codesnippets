/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    static ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode root = new ListNode(0)
        root.next = head;
        ListNode cur = root;
        ListNode runner = root;

        for (int i = 0; i < n; i++) {
            runner = runner.next;
        }

        while (runner.next != null) {
            cur = cur.next;
            runner = runner.next;
        }
        cur.next = cur.next.next;
        return root.next;
    }
}
