class Solution(object):
    def countBits(self, num):
        """
        :type num: int
        :rtype: List[int]
        """
        result = []
        for i in range(num + 1):
            result.append(self.countOnes(i))
        return result

    def countOnes(self, this_num):
        count_one = 0
        while this_num > 0:
            if (this_num % 2 != 0):
                count_one += 1
            this_num = this_num // 2
        return count_one
