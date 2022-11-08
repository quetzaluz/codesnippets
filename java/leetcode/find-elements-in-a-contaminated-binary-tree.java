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
class FindElements {
    int currentTarget = 0;
    Set<Integer> seen = new HashSet();
    TreeNode currentTree;

    private void calculateLeaf(TreeNode root, int previousRoot, boolean isLeft) {
        if (root == null || root.val != -1) { return; } // already set or null
        if (isLeft) {
            root.val = (previousRoot * 2) + 1;
        } else {
            root.val = (previousRoot * 2) + 2;
        }
        seen.add(root.val);
        calculateLeaf(root.left, root.val, true);
        calculateLeaf(root.right, root.val, false);
    }

    public FindElements(TreeNode root) {
        currentTree = root;
        root.val = 0;
        seen.add(0); 
        calculateLeaf(root.left, 0, true);
        calculateLeaf(root.right, 0, false);
    }
    
    public boolean find(int target) {
        return seen.contains(target);
    }
    }

/**
 * Your FindElements object will be instantiated and called as such:
 * FindElements obj = new FindElements(root);
 * boolean param_1 = obj.find(target);
 */