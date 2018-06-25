class Solution {
    public static ArrayList<List<Integer>> result;
    private static ArrayList<Integer> path;

    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        result = new ArrayList();
        path = new ArrayList();
        path.add(0);
        search(0, graph);
        return result;
    }
    
    private void search(int node, int[][] graph) {
        if (node == graph.length - 1) {
            result.add(new ArrayList<Integer>(path));
        } else {
            for (int i = 0; i < graph[node].length; i++) {
                int nextNode = graph[node][i];
                path.add(nextNode);
                search(nextNode, graph);
                path.remove(path.size() - 1);
            }
        }
    }
}
