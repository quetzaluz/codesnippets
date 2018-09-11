class Solution:
    def findMaxAverage(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: float
        """
        this_sum = 0.0
        for i in range(k):
            this_sum += nums[i]
        max_sum = this_sum
        for i in range(k, len(nums)):
            this_sum += nums[i] - nums[i - k]
            max_sum = max(max_sum, this_sum)
        return max_sum / k
