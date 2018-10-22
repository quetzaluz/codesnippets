class Solution:
    def shortestCompletingWord(self, license_plate, words):
        """
        :type licensePlate: str
        :type words: List[str]
        :rtype: str
        """
        lp = self.pull_letters(license_plate)
        min_length = 1000 # max specified by task
        shortest_word = None
        for i in range(len(words)):
            if self.has_match(lp, words[i]):
                if len(words[i]) < min_length:
                    min_length = len(words[i])
                    shortest_word = words[i]
        return shortest_word
    
    def pull_letters(self, license_plate):
        letters_only = []
        for c in license_plate.lower():
            if c.isalpha():
                letters_only.append(c)
        return letters_only
    
    def has_match(self, lp, word):
        candidates = lp.copy()
        for i in range(len(word)):
            try:
                char_index = candidates.index(word[i])
                del candidates[char_index]
            except:
                pass
            if len(candidates) == 0:
                return True
        return False
