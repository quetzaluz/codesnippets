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
    public List<List<Integer>> levelData;
    public List<Double> averageOfLevels(TreeNode root) {
        levelData = new ArrayList<List<Integer>>();
        traverse(root, 0);
        return calculateResult();
    }

    public void traverse(TreeNode root, int levelIndex) {
        if (levelData.size() == levelIndex) {
            levelData.add(new ArrayList<Integer>());
        }
        List<Integer> data = levelData.get(levelIndex);
        data.add(root.val);
        if (root.left != null) {
            traverse(root.left, levelIndex + 1);
        }

        if (root.right != null) {
            traverse(root.right, levelIndex + 1);
        }
        levelData.set(levelIndex, data);
    }

    List<Double> calculateResult() {
        List<Double> result = new ArrayList<>();
        for (List<Integer> d : levelData) {
            double sum = 0;
            for (Integer v : d) {
                sum += v;
            }
            result.add(sum / d.size());
        }

        return result;
    }
}
