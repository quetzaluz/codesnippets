class Solution:
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        l = 0
        r = len(nums)
        while l < r:
            m = l + (r - l) // 2
            if nums[m] > target:
                r = m
            elif nums[m] == target:
                return m
            else:
                l = m + 1
        return -1
