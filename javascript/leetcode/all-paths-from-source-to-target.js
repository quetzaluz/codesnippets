/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const result = [];
    const path = [0];
    const search = function (node, path) {
        if (node === graph.length - 1) {
            result.push(path.slice(0));
        } else {
            for (var i = 0; i < graph[node].length; i++) {
                path.push(graph[node][i]);
                search(graph[node][i], path);
                path.pop();
            }
        }
    }
    search(0, path);
    return result;
};
