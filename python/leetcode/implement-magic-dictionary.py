class MagicDictionary:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.lookup = []
        

    def buildDict(self, dict):
        """
        Build a dictionary through a list of words
        :type dict: List[str]
        :rtype: void
        """
        for word in dict:
            self.lookup.append(word)      

    def search(self, word):
        """
        Returns if there is any word in the trie that equals to the given word after modifying exactly one character
        :type word: str
        :rtype: bool
        """
        for w in self.lookup:
            if w == word or len(w) != len(word):
                continue
            diff = 0
            for i in range(len(word)):
                if word[i] != w[i]:
                    diff += 1
                if diff > 1:
                    break
            if diff == 1:
                return True
        return False

# Your MagicDictionary object will be instantiated and called as such:
# obj = MagicDictionary()
# obj.buildDict(dict)
# param_2 = obj.search(word)
