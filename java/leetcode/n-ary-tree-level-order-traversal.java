/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
    public List<List<Integer>> levelOrder(Node root) {
        List<List<Integer>> result = new ArrayList();
        int depth = 0;
        return findLevels(root, result, depth);
    }

    private List<List<Integer>> findLevels(Node root, List<List<Integer>> result, int depth) {
        if (root == null) { return result; }
        if (result.size() <= depth) {
            List<Integer> newRow = new ArrayList();
            result.add(newRow);
        }
        result.get(depth).add(root.val);
        for (Node child : root.children) {
            result = findLevels(child, result, depth + 1);
        }
        return result;
    }
}
