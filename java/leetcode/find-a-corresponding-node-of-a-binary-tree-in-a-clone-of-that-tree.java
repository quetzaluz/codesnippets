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
    TreeNode ans, tgt;
    
    public void traverse(TreeNode o, TreeNode c) {
        if (o == null) { return; }
        if (o.val == tgt.val) {
            ans = c;
        }
        traverse(o.left, c.left);      
        traverse(o.right, c.right);
    }
    public final TreeNode getTargetCopy(final TreeNode original, final TreeNode cloned, final TreeNode target) {
        tgt = target;
        traverse(original, cloned);
        return ans;
    }
}