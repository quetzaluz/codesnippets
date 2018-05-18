/*
    Reverse a linked list and return the head
    The input list will have at least one element
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function reverseLinkedList(head) {
    var currNode = head;
    var nextNode, prevNode;
    while (currNode) {
        nextNode = currNode.next
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    return prevNode || currNode; // or accounts for situation where list is only one node
}
