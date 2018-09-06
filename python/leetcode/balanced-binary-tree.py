# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        return self.checkBalance(root) != -1
    
    def checkBalance(self, root):
        if root is None:
            return 0
        left_balance = self.checkBalance(root.left)
        right_balance = self.checkBalance(root.right)
        if left_balance == -1 or right_balance == -1 or abs(left_balance - right_balance) > 1:
            return -1
        return 1 + max(left_balance, right_balance)
