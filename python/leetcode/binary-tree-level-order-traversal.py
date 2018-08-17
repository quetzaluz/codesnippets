# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root):
        """
        :type root: TreeNode
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
        if root.left is not None:
            result = self.findLevels(root.left, result, depth + 1)
        if root.right is not None:
            result = self.findLevels(root.right, result, depth + 1)
        return result
