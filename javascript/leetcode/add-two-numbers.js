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
    var newListHead, currentNewNode, newCarry, sum;
    var currNode1 = l1;
    var currNode2 = l2;
    while (currNode1 || currNode2) {
    currNode1 = currNode1 || new ListNode(0)
    currNode2 = currNode2 || new ListNode(0)
    sum = currNode1.val + currNode2.val + carry
    if (sum >= 10) {
      newCarry = 1
      sum -= 10
    } else {
      newCarry = 0
    }
      if (!newListHead) {
        newListHead = new ListNode(sum)
        currentNewNode = newListHead
      } else {
        currentNewNode.next = new ListNode(sum)
        currentNewNode = currentNewNode.next
        carry = 0
      }
      carry = newCarry
      currNode1 = currNode1.next
      currNode2 = currNode2.next
    }
    if (carry) {
      currentNewNode.next = new ListNode(carry)
    }
    return newListHead
};