/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var newListHead, currentNewNode, sum;
    var currNode1 = l1;
    var currNode2 = l2;
    while (currNode1 || currNode2) {
		sum = currNode1.val + currNode2.val
		if (sum >= 10) {
			carry = 1
			sum -= 10
		} else {
			carry = 0
		}
    	if (!newListHead) {
    		newListHead = new ListNode(sum)
    		currentNewNode = newListHead
    	} else {
    		currentNewNode.next = new ListNode(sum + carry)
    		currentNewNode = currentNewNode.next
    	}
    	currNode1 = currNode1.next
    	currNode2 = currNode2.next
    }
    return newListHead
};