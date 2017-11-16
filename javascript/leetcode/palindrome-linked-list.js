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

    // now start over for comparrison
    // Find midpoint of linked list so that we can break out early
    var thisNode = head;
    var midpoint = ~~(nodeStack.length / 2)
    var currentIndex = 0
    while(thisNode) {
        inverseNode = nodeStack.pop()
        if (inverseNode.val != thisNode.val) return false
        currentIndex++
        if (currentIndex === midpoint) {break}
        thisNode = thisNode.next
    }
    return true
};