class Solution:
    def twoSum(self, nums, target):
        seen = {}
        for i in range(len(nums)):
            if (target - nums[i]) in seen:
                res = []
                res.append(i)
                res.append(seen[target - nums[i]])
                return res
            seen[nums[i]] = i
        return False
