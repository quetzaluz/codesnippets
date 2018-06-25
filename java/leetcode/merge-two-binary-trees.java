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
    public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
        if (t1 == null && t2 == null) {
            return null;
        }
        TreeNode newRoot = new TreeNode(addNodeValues(t1, t2));
        newRoot.left = mergeTrees(t1 == null ? null : t1.left, t2 == null ? null : t2.left);
        newRoot.right = mergeTrees(t1 == null ? null : t1.right, t2 == null ? null : t2.right);
        return newRoot;
    }

    private int addNodeValues(TreeNode t1, TreeNode t2) {
        int t1V = t1 == null ? 0 : t1.val;
        int t2V = t2 == null ? 0 : t2.val;
        return t1V + t2V;
    }
}
