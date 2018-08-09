class Solution:
    def checkPossibility(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        change = -1
        i = 0
        while i + 1 < len(nums):
            if nums[i] > nums[i + 1]:
                if change > -1:
                    return False
                else:
                    change = i
            i += 1
        return change == -1 or change == 0 or change == len(nums) - 2 or nums[change - 1] <= nums[change + 1] or nums[change] <= nums[change + 2]
