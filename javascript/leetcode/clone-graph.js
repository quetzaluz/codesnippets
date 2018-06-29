/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(node) {
    if (node == null) { return null; }

    var newRoot = new UndirectedGraphNode(node.label);
    var map = {};
    map[newRoot.label] = newRoot;
    var q = [];
    q.push(node);

    while (q.length > 0) {
        var thisNode = q.pop();
        for (var i = 0; i < thisNode.neighbors.length; i++) {
            n = thisNode.neighbors[i];
            if (!map[n.label]) {
                map[n.label] = new UndirectedGraphNode(n.label);
                q.push(n);
            }
            map[thisNode.label].neighbors.push(map[n.label]);
        }
    }

    return newRoot;
};
