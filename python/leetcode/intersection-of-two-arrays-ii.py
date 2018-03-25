class Solution:
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        newArr = []
        seen = {}
        for i in range(len(nums1)):
            if nums1[i] in seen:
                seen[nums1[i]]['ct1'] += 1
            else:
                seen[nums1[i]] = {'ct1': 1, 'ct2': 0}
        for i in range(len(nums2)):
            if nums2[i] in seen:
                seen[nums2[i]]['ct2'] += 1
            else:
                seen[nums2[i]] = {'ct1': 0, 'ct2': 1}
        for key in seen:
            for j in range(min(seen[key]['ct1'], seen[key]['ct2'])):
                newArr.append(key)
        return newArr