/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
    	ListNode rootNode = new ListNode(0);
    	rootNode.next = head;
    	ListNode prevHead = rootNode;
    	while (prevHead.next != null) {
    		if (prevHead.next.val == val) {
    			prevHead.next = prevHead.next.next;
    		} else {
    			prevHead = prevHead.next;
    		}
    	}
    	return rootNode.next;
    }
}
