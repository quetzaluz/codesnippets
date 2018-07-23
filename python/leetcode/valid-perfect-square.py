class Solution:
    def isPerfectSquare(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num <= 1:
            return True
        i = 1
        while i <= num / 2:
            if i * i == num:
                return True
            i += 1
        return False
