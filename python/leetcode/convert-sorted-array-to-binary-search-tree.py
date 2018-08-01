# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def sortedArrayToBST(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """
        return self.initializeNode(nums, 0, len(nums) - 1)
    
    def initializeNode(self, nums, left, right):
        if left > right:
            return None
        if left == right:
            return TreeNode(nums[left])
        midpoint = left + ((right - left) // 2)
        root = TreeNode(nums[midpoint])
        root.left = self.initializeNode(nums, left, midpoint - 1)
        root.right = self.initializeNode(nums, midpoint + 1, right)
        return root
