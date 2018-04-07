class Solution:
    def replaceWords(self, dict, sentence):
        """
        :type dict: List[str]
        :type sentence: str
        :rtype: str
        """
        shortened = sentence.split(' ')
        for i in range(len(shortened)):
            for d in dict:
                try:
                    if shortened[i].index(d) == 0:
                        shortened[i] = d
                except:
                    continue
        return ' '.join(shortened)
