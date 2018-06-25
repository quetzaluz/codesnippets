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
    public TreeNode pruneTree(TreeNode root) {
        if (!hasOne(root)) {
            return null;
        }
        if (root != null) {
            root.left = pruneTree(root.left);
            root.right = pruneTree(root.right);
        }
        return root;
    }

    private boolean hasOne(TreeNode root) {
        if (root == null) {
            return false;
        }
        if (root.val == 1) {
            return true;
        }
        return hasOne(root.left) || hasOne(root.right);
    }
}
