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
    public boolean checkUnival(TreeNode root, int soughtValue) {
      if (root == null) return true;
      if (root.val != soughtValue) return false;
      return checkUnival(root.left, soughtValue) && checkUnival(root.right, soughtValue);
    }

    public boolean isUnivalTree(TreeNode root) {
        int soughtValue = root != null ? root.val : 0;
        return checkUnival(root, soughtValue);
    }
}
