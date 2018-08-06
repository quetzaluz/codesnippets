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
    public int findTilt(TreeNode root) {
        if (root == null) { return 0; }
        int tilt = Math.abs(findSum(root.left) - findSum(root.right));
        return tilt + findTilt(root.left) + findTilt(root.right);
    }

    public int findSum(TreeNode root) {
        if (root == null) { return 0; }
        return root.val + findSum(root.left) + findSum(root.right);
    }
}
