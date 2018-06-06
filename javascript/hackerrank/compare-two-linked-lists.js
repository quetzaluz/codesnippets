/*
    Compare two Linked Lists A and B
    Return 1 if they are identical and 0 if they are not.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function compareLinkedLists(headA, headB) {
    while (headA || headB) {
        if (!headA || !headB) {
            return 0
        }
        if (headA.data !== headB.data) {
            return 0
        }
        headA = headA.next
        headB = headB.next
    }
    return 1
}