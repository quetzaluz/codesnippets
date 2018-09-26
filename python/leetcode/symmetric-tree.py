# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if root is None:
            return True
        return self.isSameTree(self.invertTree(root.left), root.right)

    def isSameTree(self, p, q):
        if p is None and q is None:
            return True
        if (p is None and q is not None) or (q is None and p is not None):
            return False
        if p.val != q.val:
            return False
        if p.val == q.val:
            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
        return False

    def invertTree(self, root):
        if root is None:
            return root
        temp_node = root.left
        root.left = root.right
        root.right = temp_node
        if root.left is not None:
            root.left = self.invertTree(root.left)
        if root.right is not None:
            root.right = self.invertTree(root.right)
        return root
