class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        last_idx = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[last_idx] = nums[i]
                last_idx += 1
        while last_idx < len(nums):
            nums[last_idx] = 0
            last_idx += 1
