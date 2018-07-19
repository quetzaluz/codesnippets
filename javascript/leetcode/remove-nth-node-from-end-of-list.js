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
	var root = new ListNode(0)
	root.next = head;
	var cur = root;
	var runner = root;

	for (var i = 0; i < n; i++) {
		runner = runner.next;
	}

	while (runner.next != null) {
		cur = cur.next;
		runner = runner.next;
	}
	cur.next = cur.next.next;
	return root.next;
}
