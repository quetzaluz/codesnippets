/*
    Remove all duplicate elements from a sorted Linked List
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function removeDuplicates(head) {
    rootNode = new Node(0)
    rootNode.next = head
    prevHead = rootNode
    var lastVal
    while (prevHead.next !== null) {
        if (prevHead.next.data == lastVal) {
            lastVal = prevHead.next.data
            prevHead.next = prevHead.next.next
        } else {
            lastVal = prevHead.next.data
            prevHead = prevHead.next
        }
    }
    return rootNode.next
}