class Solution:
    def removeDuplicates(self, nums):
        i = 0
        while i < len(nums):
            if i > 0 and nums[i] == nums[i - 1]:
                i -= 1
                del nums[i]
            i+= 1
        return len(nums)