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
    public boolean hasCycle(ListNode head) {
        HashMap<Integer, Integer> candidates = new HashMap<Integer, Integer>();
        while (head != null) {
            if (candidates.containsKey(head.val)) {
                return true;
            } else {
                candidates.put(head.val, 1);
            }
            head = head.next;
        }
        return false;
    }
}