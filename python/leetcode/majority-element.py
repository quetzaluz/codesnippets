class Solution:
    def majorityElement(self, nums):
        seen = {}
        if len(nums) == 1:
            return nums[0]
        majority_count = len(nums) // 2
        for n in nums:
            if n in seen:
                seen[n] += 1
                if seen[n] > majority_count:
                    return n
            else:
                seen[n] = 1