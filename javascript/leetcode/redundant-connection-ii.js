/**
 * @param {number[][]} edges
 * @return {number[]}
 *
 * Redundant Connection II: one extra directed edge was added to a rooted tree.
 * - If a node has two parents: one of those two edges is redundant. We must
 *   remove the one that (when removed) leaves a valid rooted tree (no cycle).
 * - If every node has one parent: the extra edge creates a cycle; return the
 *   last edge in the cycle (last in the array).
 */
var findRedundantDirectedConnection = function(edges) {
    const n = edges.length;
    const parentEdges = {}; // node -> list of edges [u,v] where v is node (incoming edges)
    let candidate1 = null, candidate2 = null;

    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        parentEdges[v] = parentEdges[v] || [];
        parentEdges[v].push({ edge: [u, v], index: i });
    }

    for (const v of Object.keys(parentEdges)) {
        const list = parentEdges[v];
        if (list.length === 2) {
            candidate1 = list[0].index < list[1].index ? list[0].edge : list[1].edge;
            candidate2 = list[0].index < list[1].index ? list[1].edge : list[0].edge;
            break;
        }
    }

    // If some node has two parents, one of the two edges must be removed.
    // Try building the tree without candidate2 (the later edge). If we get a
    // valid rooted tree, return candidate2; else return candidate1.
    if (candidate2 !== null) {
        const parent = {};
        for (const [a, b] of edges) {
            if (a === candidate2[0] && b === candidate2[1]) continue;
            parent[b] = a;
        }
        // O(n) cycle check: each node has one parent, so follow from each node once
        const hasCycle = () => {
            const visited = new Set();
            for (let i = 1; i <= n; i++) {
                if (visited.has(i)) continue;
                const path = new Set();
                let cur = i;
                while (cur !== undefined) {
                    if (path.has(cur)) return true;
                    if (visited.has(cur)) break;
                    path.add(cur);
                    cur = parent[cur];
                }
                for (const x of path) visited.add(x);
            }
            return false;
        };
        if (!hasCycle()) return candidate2;
        return candidate1;
    }

    // No node with two parents: find cycle in O(n), then last edge in cycle (by array order)
    const parent = {};
    for (const [a, b] of edges) parent[b] = a;
    const cycleNodes = new Set();
    let cur = 1;
    const seen = new Set();
    while (cur !== undefined) {
        if (seen.has(cur)) {
            let c = cur;
            do { cycleNodes.add(c); c = parent[c]; } while (c !== cur);
            break;
        }
        seen.add(cur);
        cur = parent[cur];
    }
    for (let i = edges.length - 1; i >= 0; i--) {
        const [u, v] = edges[i];
        if (cycleNodes.has(u) && cycleNodes.has(v)) return edges[i];
    }
    return edges[edges.length - 1];
};
