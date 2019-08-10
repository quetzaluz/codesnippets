class Solution:
    def majorityElement(self, nums):
        seen = {}
        if len(nums) == 1:
            return nums
        majority_count = len(nums) // 3
        for n in nums:
            if n in seen:
                seen[n] += 1
            else:
                seen[n] = 1
        return [k for k, v in seen.items() if v > majority_count]
