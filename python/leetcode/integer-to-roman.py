class Solution:
    o = {0:'', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX'} 
    u = [[1000, {0:'', 1: 'M', 2: 'MM', 3: 'MMM'}], [100, {0:'', 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM'}], [10, {0:'', 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC'}]]    
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        res = ''
        for g in self.u:
            b = g[0]
            while num >= b:
                r = num % b
                x = num // b
                num = r
                res += g[1][x]
        res += self.o[num]
        return res
