/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    private int traverse(TreeNode root, int count) {
        int newCount = count;
        if (root != null) {
            newCount++;
            newCount = traverse(root.left, newCount);
            newCount = traverse(root.right, newCount);
        }
        return newCount;
    }

    public int countNodes(TreeNode root) {
        return traverse(root, 0);
    }
}
