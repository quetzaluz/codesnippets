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
    List<List<Integer>> paths;
    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        paths = new ArrayList();
        List<Integer> thisPath = new ArrayList();
        findSum(root, 0, sum, thisPath);
        return paths;
    }
    
    void findSum(TreeNode root, int thisSum, int sum, List<Integer> thisPath) {
            if (root == null) { return; }
            thisSum += root.val;
            thisPath.add(root.val);
            if (root.left == null && root.right == null) {
                if (sum == thisSum) {
                    paths.add(new ArrayList(thisPath));
                }
            } else {
                if (root.left != null) {
                    findSum(root.left, thisSum, sum, thisPath);
                }
                if (root.right != null) {
                    findSum(root.right, thisSum, sum, thisPath);
                }
            }
            thisSum -= root.val;
            thisPath.remove(thisPath.size() - 1);
    }
}
