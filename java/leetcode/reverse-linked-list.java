/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverseList (ListNode head) {
        ListNode currNode = head;
        ListNode nextNode;
        ListNode prevNode = null;
        if (currNode == null) {
            prevNode = currNode;
        } else {
            while (currNode != null) {
                nextNode = currNode.next;
                currNode.next = prevNode;
                prevNode = currNode;
                currNode = nextNode;
            }
        }
        return prevNode;
    }
}
