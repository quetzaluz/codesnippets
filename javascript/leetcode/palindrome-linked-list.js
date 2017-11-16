/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var thisNode = head;
    var nodeStack = [] // reverses linked list, O(n) space complexity
    while (thisNode) {
        nodeStack.push(thisNode)
        thisNode = thisNode.next
    }

    // now start over and compare
    var thisNode = head;
    while(thisNode) {
        inverseNode = nodeStack.pop()
        if (inverseNode.val != thisNode.val) return false
        thisNode = thisNode.next
    }
    return true
};