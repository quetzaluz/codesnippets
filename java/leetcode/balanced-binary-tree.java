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
    public boolean isBalanced(TreeNode root) {
        return checkBalance(root) != -1;
    }
    
    private int checkBalance(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int leftBalance = checkBalance(root.left);
        int rightBalance = checkBalance(root.right);
        if (leftBalance == -1 || rightBalance == -1 || Math.abs(leftBalance - rightBalance) > 1) {
            return -1;
        }
        return 1 + Math.max(leftBalance, rightBalance);
    }
}
