class Solution:
    def combinationSum(self, c, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        if target < 0:
            return []
        if target == 0:
            return [[]]
        result = []
        for i in range(len(c)):
            part_sum = self.combinationSum(c[i:], target - c[i])
            for s in part_sum:
                result.append(s + [c[i]])
        return result
