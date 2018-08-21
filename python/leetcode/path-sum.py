# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def hasPathSum(self, root, sum):
        """
        :type root: TreeNode
        :type sum: int
        :rtype: bool
        """
        return self.findSum(root, 0, sum)
    
    def findSum(self, root, this_sum, sum):
        if root is None:
            return False
        new_sum = root.val + this_sum
        if new_sum == sum and root.left is None and root.right is None:
            return True
        else:
            return self.findSum(root.left, new_sum, sum) or self.findSum(root.right, new_sum, sum)
