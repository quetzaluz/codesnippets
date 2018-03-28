class Solution:
    def pivotIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        sum = 0
        left_sum = 0
        for n in nums:
            sum += n
        for i in range(len(nums)):
            n = nums[i]
            if left_sum == sum - left_sum - n:
                return i
            left_sum += n
        return -1