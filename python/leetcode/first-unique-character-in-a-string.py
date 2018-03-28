class Solution:
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        seen = {}
        for i in range(len(s)):
            if s[i] in seen:
                seen[s[i]]['count'] += 1
            else:
                seen[s[i]] = {'first_index': i, 'count': 1}
        earliest_index = -1
        for key in seen:
            if seen[key]['count'] == 1:
                if earliest_index == -1:
                    earliest_index = seen[key]['first_index']
                elif seen[key]['first_index'] < earliest_index:
                    earliest_index = seen[key]['first_index']
        return earliest_index
