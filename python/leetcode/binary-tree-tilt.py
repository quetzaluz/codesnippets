# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findTilt(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root is None:
            return 0
        tilt = abs(self.findSum(root.left) - self.findSum(root.right))
        return tilt + self.findTilt(root.left) + self.findTilt(root.right)
    
    def findSum(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root is None:
            return 0
        return root.val + self.findSum(root.left) + self.findSum(root.right)
