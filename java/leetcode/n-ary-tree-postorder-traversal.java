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
    public List<Integer> postorder(Node root) {
        return traverse(root, new ArrayList<Integer>());
    }
    
    public List<Integer> traverse(Node root, List<Integer> result) {
        if (root != null) {
            for (int i = 0; i < root.children.size(); i++) {
                result = traverse(root.children.get(i), result);
            }
            result.add(root.val);
        }
        return result;
    }
}
