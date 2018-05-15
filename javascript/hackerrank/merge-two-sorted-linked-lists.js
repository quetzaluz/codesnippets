/*
    Merge two sorted lists A and B as one Linked List and return the head of merged list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function mergeLinkedLists( headA, headB) {
    let newRoot = new Node()
    newRoot.next = new Node()
    let newHead = newRoot.next
    while (headA || headB) {
        if (!headA || (headB && headA.data >= headB.data)) {
            newHead.data = headB.data
            headB = headB.next 
            newHead.next = new Node()
            newHead = newHead.next
        } else if (!headB || (headB.data >= headA.data)) {
            newHead.data = headA.data
            headA = headA.next 
            newHead.next = new Node()
            newHead = newHead.next
        }
    }
    return newRoot.next
}