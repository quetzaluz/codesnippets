from collections import Counter

class Solution:
    def minimumPushes(self, word: str) -> int:
        # Per the spec, we can have 8 buckets for letters
        # Words 8 characters or less can always be
        # entered in one move each, beyond that letters
        # are added to new buckets.

        # Going to track allocations and presses
        allocations = {1: 0} # will track {1: 8, 2: 1, 3: 0} etc
        presses = {} # tracks {'a': 1} for 1 press alloc
        char_freq = Counter(word).most_common()
        current_allocation = 1
        current_moves = 0
        for char_and_count in char_freq:
            char = char_and_count[0]
            if char not in presses:
                if allocations[current_allocation] < 8:
                    allocations[current_allocation] += 1
                else:
                    current_allocation += 1
                    allocations[current_allocation] = 1
                presses[char] = current_allocation
            current_moves += presses[char]

        return current_moves
