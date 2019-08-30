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
    public int kthSmallest(TreeNode root, int k) {
        List<Integer> values = traverse(root, new ArrayList<Integer>());
        return values.get(k - 1);
    }
    public List<Integer> traverse(TreeNode root, ArrayList<Integer> arr) {
        if (root == null) {
            return arr;
        }
        traverse(root.left, arr);
        arr.add(root.val);
        traverse(root.right, arr);
        return arr;
    }
}
