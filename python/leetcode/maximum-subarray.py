class Solution:
    def maxSubArray(self, nums):
        start_idx = 0
        max_s = nums[start_idx]
        while(start_idx < len(nums)):
            this_sum = nums[start_idx]
            if (this_sum > max_s):
                max_s = this_sum
            for i in range(start_idx + 1, len(nums)):
                this_sum += nums[i]
                if this_sum > max_s:
                    max_s = this_sum
                elif this_sum < 0:
                    break
            start_idx += 1
        return max_s
