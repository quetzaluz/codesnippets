# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root is None:
            return 0
        if root.left is not None and root.right is not None:
            return min([self.minDepth(root.left), self.minDepth(root.right)]) + 1
        else:
            return (self.minDepth(root.left) if root.left is not None else self.minDepth(root.right)) + 1 
