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
    public List<Integer> inorderTraversal(TreeNode root) {
        // this initialization can be avoided if we had more control over Solution
        ArrayList<Integer> result = new ArrayList();
        result = traverse(root, result);
        return result;
    }
    
    public ArrayList<Integer> traverse(TreeNode root, ArrayList<Integer> result) {
        if (root != null) {
            result = traverse(root.left, result);
            result.add(root.val);
            result = traverse(root.right, result);
        }
        return result;
    }
}
