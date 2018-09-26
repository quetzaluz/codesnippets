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
    public TreeNode invertTree(TreeNode root) {
        if (root == null) { return root; }
        TreeNode tmpNode = root.left;
        root.left = root.right;
        root.right = tmpNode;
        root.left = invertTree(root.left);
        root.right = invertTree(root.right);
        return root;
    }
}
