class Solution:
    def isPowerOfFour(self, num):
        """
        :type num: int
        :rtype: bool
        """
        while num > 4:
            num /= 4
        
        return num == 4 or num == 1
