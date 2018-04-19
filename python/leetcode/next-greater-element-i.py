class Solution:
    def nextGreaterElement(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        next_greater = {}
        for n in nums2:
            for k in next_greater:
                if next_greater[k] == -1 and int(k) < n:
                    next_greater[k] = n
            if n in nums1 and n not in next_greater:
                next_greater[n] = -1
        result = []
        for n in nums1:
            result.append(next_greater[n])
        return result
