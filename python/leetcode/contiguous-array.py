class Solution(object):
    def findMaxLength(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max_len = 0
        balance = 0
        results = {0: 0}
        for i in range(len(nums)):
            balance += -1 if nums[i] == 0 else 1
            if balance in results:
                max_len = max(max_len, i + 1 - results[balance])
            else:
                results[balance] = i + 1
        return max_len
