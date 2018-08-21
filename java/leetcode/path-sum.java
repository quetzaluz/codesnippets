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
    public boolean hasPathSum(TreeNode root, int sum) {
        return findSum(root, 0, sum);
    }
    
    private boolean findSum(TreeNode root, int thisSum, int sum) {
        if (root == null) { return false; }
        int newSum = thisSum + root.val;
        if (newSum == sum && root.left == null && root.right == null) {
            return true;
        }
        return findSum(root.left, newSum, sum) || findSum(root.right, newSum, sum);
    }
}
