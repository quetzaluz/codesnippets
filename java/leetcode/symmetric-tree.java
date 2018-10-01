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
    public boolean isSymmetric(TreeNode root) {
        if (root == null) {
            return true;
        }
        return isSameTree(
            invertTree(root.left),
            root.right
        );
    }

    private boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) { return true; }
        if (p == null && q != null || q == null && p != null) { return false; }
        if (p.val != q.val) { return false; }
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    private TreeNode invertTree (TreeNode root) {
        if (root == null) { return root; }
        TreeNode tmpNode = root.left;
        root.left = root.right;
        root.right = tmpNode;
        root.left = invertTree(root.left);
        root.right = invertTree(root.right);
        return root;
    }
}
