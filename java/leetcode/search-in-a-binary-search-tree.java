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
    public TreeNode searchBST(TreeNode root, int val) {
        return search(root, val);
    }
    
    private TreeNode search(TreeNode root, int val) {
        if (root.val == val) {
            return root;
        } else if (val < root.val && root.left != null) {
            return search(root.left, val);
        } else if (val > root.val && root.right != null) {
            return search(root.right, val);
        }
        return null;
    }
}
