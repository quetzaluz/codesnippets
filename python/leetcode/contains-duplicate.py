class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        seen = {}
        for i in range(len(nums)):
            if nums[i] in seen:
                return True
            seen[nums[i]] = 1
        return False