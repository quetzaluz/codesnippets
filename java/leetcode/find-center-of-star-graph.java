class Solution {
    Map<Integer, Integer> resultSet = new HashMap();
    private void addEdgeToResult(int edgeNum) {
        if (resultSet.containsKey(edgeNum)) {
            resultSet.put(edgeNum, resultSet.get(edgeNum) + 1);
        } else {
            resultSet.put(edgeNum, 1);
        }
    }
    public int findCenter(int[][] edges) {
        for (int i = 0; i < edges.length; i++) {
            addEdgeToResult(edges[i][0]);
            addEdgeToResult(edges[i][1]);
        }
        int largestCount = 0;
        int largestKey = 0;
        for (Map.Entry<Integer, Integer> entry : resultSet.entrySet()) {
            if (entry.getValue() > largestCount) {
                largestCount = entry.getValue();
                largestKey = entry.getKey();
            }
        }
        return largestKey;
    }
}
