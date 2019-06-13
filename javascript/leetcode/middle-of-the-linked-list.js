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

var middleNodeTwoPointer = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
};
