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
    private HashMap<Integer, List<Integer>> levelValues = new HashMap();
    
    public boolean isEvenOddTree(TreeNode root) {
        traverse(root, 0);
        return isTreeEvenOdd();
    }
    
    public void traverse(TreeNode node, int level) {
        if (node == null) {
            return;
        }
        addToLevel(node.val, level);
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }
    
    public void addToLevel(int value, int level) {
        if (levelValues.containsKey(level)) {
            levelValues.get(level).add(value);
        } else {
            List<Integer> newList = new ArrayList();
            newList.add(value);
            levelValues.put(level, newList);
        }

    }
    
    private boolean isTreeEvenOdd() {
        for (int key : levelValues.keySet()) {
            if (levelValues.get(key).size() == 0) {
                continue;
            }
            int prevValue = levelValues.get(key).get(0);
            if (key % 2 == 0) {
                if (prevValue % 2 == 0) {
                    return false;
                }
                for (int i = 1; i < levelValues.get(key).size(); i++) {
                    if (prevValue % 2 == 0) {
                        return false;
                    }
                    if (levelValues.get(key).get(i) <= prevValue) {
                        return false;
                    }
                    prevValue = levelValues.get(key).get(i);
                }
                if (prevValue % 2 == 0) {
                    return false;
                }
            } else {
                if (prevValue % 2 == 1) {
                   return false;
                }
                for (int i = 1; i < levelValues.get(key).size(); i++) {
                    if (prevValue % 2 == 1) {
                        return false;
                    }
                    if (levelValues.get(key).get(i) >= prevValue) {
                        return false;
                    }
                    prevValue = levelValues.get(key).get(i);
                }
                if (prevValue % 2 == 1) {
                   return false;
                }
            }
        }
        return true;
    }
}