# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def diameterOfBinaryTree(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root is None:
            return 0
        return max(
            self.diameterOfBinaryTree(root.left),
            self.diameterOfBinaryTree(root.right),
            self.findDiameter(root.left, 0) + self.findDiameter(root.right, 0)
        )
    
    def findDiameter(self, root, diameter):
        if root is None:
            return 0
        return max(self.findDiameter(root.left, diameter), self.findDiameter(root.right, diameter)) + 1
