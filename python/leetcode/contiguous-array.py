class Solution(object):
    def findMaxLength(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max_len = 0
        this_max_len = 0
        balance = 0
        j = 0
        for i in range(len(nums)):
            this_max_len = 0
            balance = 0
            j = i
            while j < len(nums):
                balance += -1 if nums[j] == 0 else 1
                this_max_len += 1
                if balance == 0 and this_max_len > max_len:
                    max_len = this_max_len
                j += 1
            if balance == 0:
                if this_max_len > max_len:
                    max_len = this_max_len
        return max_len
