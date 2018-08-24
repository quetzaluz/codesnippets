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
    public int diameterOfBinaryTree(TreeNode root) {
        if (root == null) { return 0; }
        int diameterLeft = diameterOfBinaryTree(root.left);
        int diameterRight = diameterOfBinaryTree(root.right);
        int branchDepth = findDepth(root.left, 0) + findDepth(root.right, 0);
        return Math.max(branchDepth, Math.max(diameterLeft, diameterRight));
    }
    
    private int findDepth(TreeNode root, int depth) {
        if (root == null) { return 0; }
        return Math.max(findDepth(root.left, depth), findDepth(root.right, depth)) + 1;

    }
}
