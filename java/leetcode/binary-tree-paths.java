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

    public List<String> binaryTreePaths(TreeNode root) {
        String thisPath = "";
        List<String> paths = new ArrayList();
        if (root == null) { return paths; }
        findPath(root, thisPath, paths);
        return paths; 
    }
    
    private void findPath(TreeNode root, String thisPath, List<String> paths) {
        if (root.left == null && root.right == null) {
            thisPath += root.val;
            paths.add(thisPath);
        }
        if (root.left != null) {
            findPath(root.left, thisPath + root.val + "->", paths);
        }
        if (root.right != null) {
            findPath(root.right, thisPath + root.val + "->", paths);
        }
    }
}
