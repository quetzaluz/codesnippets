class Solution:
    def singleNonDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        previous_val = nums[1]
        found_elem = None
        for i in range(len(nums)):
            if previous_val != nums[i] and (i + 1 == len(nums) or nums[i] != nums[i + 1]):
                found_elem = nums[i]
                break
            previous_val = nums[i]
        return found_elem
