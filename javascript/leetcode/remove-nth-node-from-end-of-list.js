/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd (head, n) {
	len = 1;
	node = head;
	while(node.next) {
		node = node.next
		len++
	}
	insertAt = len - n
	newHead = head
	node = newHead
	c = 0
	while (c <= insertAt) {
		if (c == insertAt) {
			node.next = node.next ? node.next.next : null
		}
		c++
		node = node.next
	}
	return newHead
}