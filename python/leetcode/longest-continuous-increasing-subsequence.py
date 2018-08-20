class Solution:
    def findLengthOfLCIS(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        longest = 0
        if len(nums) == 0:
            return longest
        last = nums[0]
        longest += 1
        this_len = longest
        for n in nums:
            if n > last:
                this_len += 1
            else:
                if this_len > longest:
                    longest = this_len
                this_len = 1
            last = n
        if this_len > longest:
            longest = this_len
        return longest
