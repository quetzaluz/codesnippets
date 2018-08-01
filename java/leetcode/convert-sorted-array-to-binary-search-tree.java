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
    public TreeNode sortedArrayToBST(int[] nums) {
        return initializeNode(nums, 0, nums.length - 1);
    }
    
    public TreeNode initializeNode(int[] nums, int left, int right) {
        if (left > right) { return null; }
        if (left == right) { return new TreeNode(nums[left]); }
        int midpoint = left + Math.round((right - left) / 2);
        TreeNode root = new TreeNode(nums[midpoint]);
        root.left = initializeNode(nums, left, midpoint - 1);
        root.right = initializeNode(nums, midpoint + 1, right);
        return root;
    }
}
