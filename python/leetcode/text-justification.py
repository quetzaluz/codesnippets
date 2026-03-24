class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        output = []
        candidate_words = []
        candidate_words_length = 0
        all_words_length = len(words)
        x = 0

        while x < all_words_length:
            word = words[x]
            word_len = len(word)
            word_count = len(candidate_words)

            # If we add this word, we need one space between each existing word
            min_spaces = word_count if word_count > 0 else 0

            # Check if word can be added
            if candidate_words_length + word_len + min_spaces <= maxWidth:
                candidate_words_length += word_len
                candidate_words.append(word)
                x += 1
            else:
                # Have the most candidate words possible, justify
                word_count = len(candidate_words)
                spaces = maxWidth - candidate_words_length

                new_string = ""

                if word_count == 1:
                    new_string = candidate_words[0].ljust(maxWidth)
                else:
                    gaps = word_count - 1
                    spaces_between = spaces // gaps
                    spaces_remainder = spaces % gaps

                    for i in range(word_count):
                        candidate_word = candidate_words[i]
                        is_last_word = i == word_count - 1
                        new_string += candidate_word
                        if not is_last_word:
                            new_string += "".ljust(spaces_between)
                            if spaces_remainder > 0:
                                new_string += " "
                                spaces_remainder -= 1

                output.append(new_string)
                candidate_words = []
                candidate_words_length = 0

        # Routine for remaining candidate words
        if len(candidate_words) > 0:
            new_string = " ".join(candidate_words)
            output.append(new_string.ljust(maxWidth))

        return output
