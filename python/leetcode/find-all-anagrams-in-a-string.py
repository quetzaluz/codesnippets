class Solution:
    def findAnagrams(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: List[int]
        """
        found_idx = []
        p_len = len(p)
        for i in range(len(s) - (p_len - 1)):
            if self.substringIsAnagram(s[i:i + p_len], p):
                found_idx.append(i)
        return found_idx

    def substringIsAnagram(self, s, p):
        p_arr = list(p)
        for c in range(len(s)):
            try:
                letter_idx = p_arr.index(s[c])
                p_arr[letter_idx] = None
            except:
                return False
        return True
