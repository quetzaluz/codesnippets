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
    public List<List<Integer>> findLevels(TreeNode root, List<List<Integer>> result, int depth) {
        if (root == null) {
            return result;
        }
        if (result.size() <= depth) {
            List<Integer> newRow = new ArrayList();
            result.add(newRow);
        }
        result.get(depth).add(root.val);
        if (root.left != null) {
            result = findLevels(root.left, result, depth + 1);
        }
        if (root.right != null) {
            result = findLevels(root.right, result, depth + 1);
        }
        return result;
    }

    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList();
        int depth = 0;
        return findLevels(root, result, depth);
    }
}
