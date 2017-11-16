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
    var seenVals = {}
    while (thisNode) {
        seenVals[thisNode.val] = (seenVals[thisNode.val] && seenVals[thisNode.val] + 1) || 1
        thisNode = thisNode.next
    }
    var countOdds = 0 // by definition, all characters in a palindrome are even except one if length is odd
    for (key in seenVals) {
        countOdds += seenVals[key] % 2
        if (countOdds > 1) return false
    }
    return countOdds <= 1 // Still need to evaluate for edge case of two items
};