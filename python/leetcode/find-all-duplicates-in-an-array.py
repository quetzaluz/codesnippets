class Solution:
    def findDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        seen = {}
        dupes = []
        for i in range(len(nums)):
            if nums[i] in seen:
                dupes.append(nums[i])
            else:
                seen[nums[i]] = 1
        return dupes
