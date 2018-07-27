/*
The Node class is defined as follows:
    class Node {
    int data;
    Node left;
    Node right;
     }
*/
class Solution {
    static int last = -1; // constraints are data is 0 to 10^4. For checking left of tree
    boolean checkBST(Node root) {
        if (root == null) { return true; }
        if (!checkBST(root.left)) { return false; }
        if (root.data <= last) { return false;}
        last = root.data;
        if (!checkBST(root.right)) { return false; }
        return true;
    }
}
