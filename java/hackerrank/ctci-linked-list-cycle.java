/*
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty.

A Node is defined as: 
    class Node {
        int data;
        Node next;
    }
*/

boolean hasCycle(Node head) {
    if (head == null) { return false; }
    Node s = head;
    Node f = head.next;
    while (f != s) {
        if (f == null || f.next == null) {
            return false;
        }
        s = s.next;
        f = f.next.next;
    }
    return true;
}
