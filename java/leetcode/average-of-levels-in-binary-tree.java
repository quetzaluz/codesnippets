import java.util.stream.Collectors;

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
    public List<List<Double>> levelData;
    public List<Double> averageOfLevels(TreeNode root) {
        levelData = new ArrayList<List<Double>>();
        traverse(root, 0);
        return levelData.stream().map(data -> data.stream().reduce(0.0, (n, acc) -> n + acc) / data.size()).collect(Collectors.toList());
    }

    public void traverse(TreeNode root, int levelIndex) {
        if (levelData.size() < levelIndex + 1) {
            levelData.add(new ArrayList<Double>());
        }
        List<Double> data = levelData.get(levelIndex);
        data.add(new Double(root.val));
        if (root.left != null) {
            traverse(root.left, levelIndex + 1);
        }

        if (root.right != null) {
            traverse(root.right, levelIndex + 1);
        }
        levelData.set(levelIndex, data);
    }
}
