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
    public static int min;
    public int minDiffInBST(TreeNode root) {
        min = Integer.MAX_VALUE;
        dfsMinDiff(root);
        return min;
    }

    private void dfsMinDiff (TreeNode root) {
        if (root.left != null) {
            min = Math.min(min, Math.abs(root.val - dfRight(root.left)));
            dfsMinDiff(root.left);
        }
        if (root.right != null) {
            min = Math.min(min, Math.abs(root.val - dfLeft(root.right)));
            dfsMinDiff(root.right);
        }
    }

    private int dfLeft (TreeNode root) {
        if (root.left != null) {
            return dfLeft(root.left);
        } else {
            return root.val;
        }
    }

    private int dfRight (TreeNode root) {
        if (root.right != null) {
            return dfRight(root.right);
        } else {
            return root.val;
        }
    }
}
