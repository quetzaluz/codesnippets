class Solution:
    def findDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        seen = {}
        for i in range(len(nums)):
            if nums[i] in seen:
                return nums[i]
            seen[nums[i]] = 1
