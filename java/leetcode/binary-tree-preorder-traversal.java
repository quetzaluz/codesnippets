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
    public List<Integer> preorderTraversal(TreeNode root) {
        return traverse(root, new ArrayList<Integer>());
    }
    
    public List<Integer> traverse(TreeNode root, List<Integer> result) {
        if (root != null) {
            result.add(root.val);
            result = traverse(root.left, result);
            result = traverse(root.right, result);
        }
        return result;
    }
}
