/**
 * Definition for undirected graph.
 * class UndirectedGraphNode {
 *     int label;
 *     List<UndirectedGraphNode> neighbors;
 *     UndirectedGraphNode(int x) { label = x; neighbors = new ArrayList<UndirectedGraphNode>(); }
 * };
 */
public class Solution {
    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {
        if (node == null) { return null; }

        UndirectedGraphNode newRoot = new UndirectedGraphNode(node.label);
        HashMap<Integer, UndirectedGraphNode> map = new HashMap();
        map.put(newRoot.label, newRoot);
        LinkedList<UndirectedGraphNode> q = new LinkedList();
        q.add(node);

        while (!q.isEmpty()) {
            UndirectedGraphNode thisNode = q.pop();
            for (UndirectedGraphNode n : thisNode.neighbors) {
                if (!map.containsKey(n.label)) {
                    map.put(n.label, new UndirectedGraphNode(n.label));
                    q.add(n);
                }
                map.get(thisNode.label).neighbors.add(map.get(n.label));
            }
        }

        return newRoot;
    }
}
