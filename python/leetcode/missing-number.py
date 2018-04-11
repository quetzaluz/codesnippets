class Solution:
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        seen = [None] * (len(nums) + 1)
        for n in nums:
            seen[n] = 1
        for i in range(len(seen)):
            if seen[i] != 1:
                return i
