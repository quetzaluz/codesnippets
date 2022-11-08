/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private Map<Integer, Integer> resultSet = new HashMap();    
    private int traverse(TreeNode root, int thisLevel) {
        if (root == null) {
            return 0;
        }
        if (resultSet.containsKey(thisLevel)) {
            resultSet.put(thisLevel, Math.max(root.val, resultSet.get(thisLevel)));
        } else {
            resultSet.put(thisLevel, root.val);    
        }
        int leftLargest = traverse(root.left, thisLevel + 1);
        int rightLargest = traverse(root.right, thisLevel + 1);
        return root.val;
    }
    public List<Integer> largestValues(TreeNode root) {
        traverse(root, 0);
        return new ArrayList(resultSet.values());
    }
}
