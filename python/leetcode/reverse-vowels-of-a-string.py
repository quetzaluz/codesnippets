class Solution:
    vowels = 'aeiou'
    def replaceAt(self, s, index, replacement):
        return s[0:index] + replacement + s[index + len(replacement):]

    def reverseVowels(self, s):
        foundVowels = []
        for i in range(len(s)):
            if s[i].lower() in self.vowels:
                foundVowels.append([i, s[i]])
        for i in range(len(foundVowels) //2):
            s = self.replaceAt(s, foundVowels[i][0], foundVowels[len(foundVowels) - i - 1][1])
            s = self.replaceAt(s, foundVowels[len(foundVowels) - i - 1][0], foundVowels[i][1])
        return s
