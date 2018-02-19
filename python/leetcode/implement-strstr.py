class Solution:
    def strStr(self, haystack, needle):
        if needle == '':
            return 0
        i = 0
        while i < len(haystack) - (len(needle) - 1):
            if haystack[i] == needle[0]:
                j = 0
                original_i = i
                while (j < len(needle)):
                    if (needle[j] == haystack[i]):
                        j += 1
                        i += 1
                    else: 
                        break
                if j == len(needle):
                    return original_i
                else:
                    i = original_i
            i += 1
        return -1