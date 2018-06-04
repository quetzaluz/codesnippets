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

class Solution {
    public bool hasCycle(ListNode head) {
        HashMap<Integer, Integer> candidates = new HashMap<Integer, Integer>();
        while (head) {
            if (candidates.hasKey(head.val)) {
                return true;
            } else {
                candidates.set(head.val, 1);
            }
            head = head.next;
        }
        return false;
    }
}