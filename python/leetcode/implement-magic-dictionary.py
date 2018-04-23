class MagicDictionary:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.lookup = []
        
    def buildLetterFrequency(self, word):
        freq = {}
        for c in word:
            freq[c] = 1 if c not in freq else freq[c] + 1
        return freq

    def buildDict(self, dict):
        """
        Build a dictionary through a list of words
        :type dict: List[str]
        :rtype: void
        """
        for word in dict:
            self.lookup.append({'word': word, 'len': len(word), 'freq': self. buildLetterFrequency(word)})        

    def search(self, word):
        """
        Returns if there is any word in the trie that equals to the given word after modifying exactly one character
        :type word: str
        :rtype: bool
        """
        letter_freq = self.buildLetterFrequency(word)
        found_word = False
        for w in self.lookup:
            if w['len'] != len(word):
                continue
            if w['word'] == word:
                continue
            diff = 0
            for c in letter_freq:
                if c not in w['freq']:
                    diff += letter_freq[c]
                else:
                    diff += w['freq'][c] - letter_freq[c]
            if diff <= 1 and diff >= -1:
                found_word = True
                break
        return found_word
        


# Your MagicDictionary object will be instantiated and called as such:
# obj = MagicDictionary()
# obj.buildDict(dict)
# param_2 = obj.search(word)
