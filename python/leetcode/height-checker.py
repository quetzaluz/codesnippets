class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        sorted_heights = heights.copy()
        sorted_heights.sort()
        wrong_indices = 0
        for i in range(len(heights)):
            if heights[i] != sorted_heights[i]:
                wrong_indices+=1
        return wrong_indices
