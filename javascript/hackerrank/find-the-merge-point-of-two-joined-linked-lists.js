/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
    pATraversals = 0
    pBTraversals = 0
    rootA = new Node(0)
    rootA.next = headA
    rootB = new Node(0)
    rootB.next = headB
    pA = headA
    pB = headB
    while (pATraversals < 2 && pBTraversals < 2) {
        if (pA && pB && pA.data == pB.data) {
            return pA.data
        }
        if (pA === null || pA.next === null) {
            pA = rootB.next
            pATraversals += 1
        } else {
            pA = pA.next
        }
        if (pB === null || pB.next === null) {
            pB = rootA.next
            pBTraversals += 1
        } else {
            pB = pB.next
        }
    }
    return
}
