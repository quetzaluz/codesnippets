class Solution:
    def mostCommonWord(self, paragraph, banned):
        """
        :type paragraph: str
        :type banned: List[str]
        :rtype: str
        """
        seen = {}
        ban = set(banned)
        seenMostCount = 0
        seenMostWord = ''
        translator = str.maketrans('', '', string.punctuation)
        for w in paragraph.split(' '):
            wKey = w.translate(translator).lower()
            print(wKey)
            if wKey not in ban:
                if wKey in seen:
                    seen[wKey] += 1
                else:
                    seen[wKey] = 1
                if seen[wKey] > seenMostCount:
                    seenMostCount = seen[wKey]
                    seenMostWord = wKey
        return seenMostWord
