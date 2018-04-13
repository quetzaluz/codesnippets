class Solution:
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = 0
        prev = None
        prev_prev = None
        while i < len(nums):
            if i > 0 and nums[i] == prev and nums[i] == prev_prev:
                i -= 1
                del nums[i]
            prev_prev = prev
            prev = nums[i]
            i+= 1
        return len(nums)
