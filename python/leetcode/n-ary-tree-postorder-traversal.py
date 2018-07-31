"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def postorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        return self.traverse(root, [])

    def traverse(self, root, result):
        if root is not None:
            for i in range(len(root.children)):
                result = self.traverse(root.children[i], result)
            result.append(root.val)
        return result
