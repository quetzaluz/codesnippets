# Definition for a undirected graph node
# class UndirectedGraphNode:
#     def __init__(self, x):
#         self.label = x
#         self.neighbors = []

class Solution:
    # @param node, a undirected graph node
    # @return a undirected graph node
    def cloneGraph(self, node):
        if node is None:
            return None
        new_root = UndirectedGraphNode(node.label)
        cloned_map = {}
        cloned_map[new_root.label] = new_root
        q = []
        q.append(node)
        while (len(q) > 0):
            this_node = q.pop()
            for i in range(len(this_node.neighbors)):
                n = this_node.neighbors[i]
                if (n.label not in cloned_map):
                    cloned_map[n.label] = UndirectedGraphNode(n.label)
                    q.append(n)
                cloned_map[this_node.label].neighbors.append(cloned_map[n.label])
        return new_root
