# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def pathSum(self, root, sum):
        """
        :type root: TreeNode
        :type sum: int
        :rtype: int
        """
        if root is None:
            return 0
        return self.findSum(root, sum) + self.pathSum(root.left, sum) + self.pathSum(root.right, sum)
        
    def findSum(self, root, sum):
        if root is None:
            return 0
        this_sum = 1 if root.val == sum else 0
        return this_sum + self.findSum(root.left, sum - root.val) + self.findSum(root.right, sum - root.val)
