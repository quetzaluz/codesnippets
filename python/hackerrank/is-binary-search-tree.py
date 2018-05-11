""" Node is defined as
class node:
  def __init__(self, data):
      self.data = data
      self.left = None
      self.right = None
"""

def check_binary_search_tree_(root):
    if root and ((root.left is not None and root.left.data > root.data) or (root.right is not None and root.right.data < root.data)):
        return False
    if root is None:
        return True
    return check_binary_search_tree_(root.left) and check_binary_search_tree_(root.right)
