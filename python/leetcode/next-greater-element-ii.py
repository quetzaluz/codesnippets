class Solution:
    def scanForGreater(self, target, idx, nums):
        i = 0
        l = len(nums)
        while i < l:
            if nums[(idx + i) % l] > target:
                return nums[(idx + i) % l]
            i += 1
        return -1
    def nextGreaterElements(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = []
        for idx in range(len(nums)):
            n = nums[idx]
            result.append(self.scanForGreater(n, idx, nums))
        return result
