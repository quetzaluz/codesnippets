class Solution:
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        lst = []
        for i in nums1:
            for j in nums2:
                if i == j and j not in lst:
                    lst.append(j)
        return lst
