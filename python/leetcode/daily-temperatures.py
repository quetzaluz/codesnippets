class Solution:
    def dailyTemperatures(self, temperatures):
        """
        :type temperatures: List[int]
        :rtype: List[int]
        """
        result = []
        for i in range(len(temperatures)):
            ti = i
            c = 0
            greater_found = False
            o_temp = temperatures[i]
            while ti < len(temperatures):
                if temperatures[ti] > o_temp:
                    greater_found = True
                    break
                else:
                    c += 1
                ti += 1
            result.append(c if greater_found else 0)
        return result
