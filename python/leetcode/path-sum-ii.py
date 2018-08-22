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
        :rtype: List[List[int]]
        """
        self.paths = []
        self.findSum(root, 0, sum, [])
        return self.paths
        
    def findSum(self, root, this_sum, sum, this_path):
        if root is None:
            return
        new_sum = this_sum + root.val
        this_path.append(root.val)
        if root.left is None and root.right is None:
            if sum == new_sum:
                self.paths.append(this_path[:])
        else:
            if root.left is not None:
                self.findSum(root.left, new_sum, sum, this_path)
            if root.right is not None:
                self.findSum(root.right, new_sum, sum, this_path)
        this_path.pop()
