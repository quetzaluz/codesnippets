class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        consec = 0
        max_consec = 0
        for i in range(len(nums)):
            if nums[i] == 1:
                consec += 1
            else:
                if consec > max_consec:
                    max_consec = consec
                consec = 0
        if consec > max_consec:
            max_consec = consec
        return max_consec
