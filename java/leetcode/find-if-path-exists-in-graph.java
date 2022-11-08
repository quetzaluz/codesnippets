// TODO: very redundant solution, multiple traversals, make this more efficient.
class Solution {
    Map<Integer, List<Integer>> resultSet = new HashMap();
    boolean valueExists = false;
    Set<Integer> nodesVisited = new HashSet();
    private void addEdgeToResult(int edgeNum1, int edgeNum2) {
        List thisList;
        if (resultSet.containsKey(edgeNum1)) {
            thisList = resultSet.get(edgeNum1);
        } else {
            thisList = new ArrayList();
        }
            thisList.add(edgeNum2);
            resultSet.put(edgeNum1, thisList);
    }
    
    private void findIfDestinationIsConnectedToNode(int thisNode, int destination) {
        List<Integer> nodesFromOrigin = resultSet.get(thisNode);
        for (int i = 0; i < nodesFromOrigin.size(); i++) {
            int connectedNode = nodesFromOrigin.get(i);
            if (nodesVisited.contains(connectedNode)) {
                break;
            }
            if (connectedNode == destination) {
                valueExists = true;
            }
            nodesVisited.add(connectedNode);
            findIfDestinationIsConnectedToNode(connectedNode, destination);
        }
    }
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        for (int i = 0; i < edges.length; i++) {
            int[] edgeSet = edges[i];
            addEdgeToResult(edgeSet[0], edgeSet[1]);
            addEdgeToResult(edgeSet[1], edgeSet[0]);
        }
        if (!resultSet.containsKey(source) || !resultSet.containsKey(destination)) {
            return false;
        }
        findIfDestinationIsConnectedToNode(source, destination);
        return valueExists;
    }
}