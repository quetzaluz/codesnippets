# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
  sought_value = None
  def check_unival(self, root: TreeNode) -> bool:
    if root is None:
      return True
    if root.val != self.sought_value:
      return False
    return self.check_unival(root.left) and self.check_unival(root.right)
  def isUnivalTree(self, root: TreeNode) -> bool:
    self.sought_value = root and root.val
    return self.check_unival(root)
