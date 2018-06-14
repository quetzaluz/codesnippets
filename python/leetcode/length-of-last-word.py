class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: ints.rfind(' ')
        """
        st = s.strip()
        return (len(st) - (st.rfind(' ') + 1))
