class Solution:
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        seen1 = {}
        seen2 = {}
        for c in s:
            seen1[c] = seen1[c] + 1 if c in seen1 else 1
        for c in t:
            seen2[c] = seen2[c] + 1 if c in seen2 else 1

        for key in seen2:
            if key not in seen1 or seen2[key] != seen1[key]:
                return key
        return -1
