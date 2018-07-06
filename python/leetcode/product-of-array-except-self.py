class Solution:
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        b = [0] * len(nums)
        b[0] = 1
        a = 1
        for i in range(len(nums) - 1):
            a *= nums[i]
            b[i + 1] = a
        a = 1
        for i in range(len(nums) - 1, 0, -1):
            a *= nums[i]
            b[i - 1] *= a
        return b
