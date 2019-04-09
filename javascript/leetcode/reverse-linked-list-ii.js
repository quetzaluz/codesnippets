/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let currM = m;
    let currN = n;
    let currP = 0;
    let currHead = head;
    let prevNode = head;
    while (currHead) {
        // Swap routine
        nextNode = currHead.next;
        if (currP >= m && currP <= n) {
            currHead.next = prevNode;
        }
        prevNode = currHead;
        currHead = nextNode;
        currP++;
    }
    return head;
};
