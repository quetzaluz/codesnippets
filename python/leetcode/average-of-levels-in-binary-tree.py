# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    level_data = []
    def averageOfLevels(self, root: TreeNode) -> List[float]:
        self.level_data = []
        self.traverse(root, 0)
        return self.calculate_result()
    def traverse(self, root: TreeNode, level_index: int):
        if len(self.level_data) == level_index:
            self.level_data.append([])
        data = self.level_data[level_index]
        data.append(root.val)
        if root.left is not None:
            self.traverse(root.left, level_index + 1)
        if root.right is not None:
            self.traverse(root.right, level_index + 1)
        self.level_data[level_index] = data
    def calculate_result(self):
        result = []
        for d in self.level_data:
            sum = 0
            for v in d:
                sum += v
            result.append(sum / len(d))
        return result
