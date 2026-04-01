class Solution:
    def isCircularSentence(self, sentence: str) -> bool:
        # allocate previous last char before loop
        previous_last_char = sentence[len(sentence) - 1]

        # Split words -- probably more efficient to scan characters
        # to avoid 2n passes but doing this for now
        words = sentence.split(" ")
        for word in words:
            this_first_char = word[0]
            this_last_char = word[len(word) - 1]
            if this_first_char == previous_last_char:
                previous_last_char = this_last_char
            else:
                return False
        
        return True
