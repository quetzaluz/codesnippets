/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let len = 0;
    let serialized = [];
    while (head) {
        len++;
        serialized.push(head);
        head = head.next;
    }
    return serialized[Math.floor(len / 2)];
};
