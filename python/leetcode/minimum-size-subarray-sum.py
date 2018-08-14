class Solution:
    def minSubArrayLen(self, s, nums):
        """
        :type s: int
        :type nums: List[int]
        :rtype: int
        """
        this_len = 0
        this_sum = 0
        max_len = len(nums) + 1 # placeholder to see if subarray is found
        min_len = max_len
        j = 0
        for i in range(len(nums)):
            this_sum = nums[i]
            this_len = 1
            j = i + 1
            while j < len(nums):
                if this_sum >= s:
                    break
                this_sum += nums[j]
                this_len += 1
                j += 1
            if this_sum >= s and this_len < min_len:
                min_len = this_len
        if min_len < max_len:
            return min_len
        else:
            return 0
