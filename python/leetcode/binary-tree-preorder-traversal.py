# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def preorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        return self.traverse(root, [])
    
    def traverse(self, root, result):
        if (root is not None):
            result.append(root.val)
            result = self.traverse(root.left, result)
            result = self.traverse(root.right, result)
        return result
