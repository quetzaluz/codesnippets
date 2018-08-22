"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def levelOrder(self, root):
        """
        :type root: Node
        :rtype: List[List[int]]
        """
        result = []
        depth = 0
        return self.findLevels(root, result, depth)

    def findLevels(self, root, result, depth):
        if root is None:
            return result
        if len(result) <= depth:
            result.append([])
        result[depth].append(root.val)
        for child in root.children:
            result = self.findLevels(child, result, depth + 1)
        return result
