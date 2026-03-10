class Solution:
    lookup = {
        '1': [],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
        '0': []
    }

    def letterCombinations(self, digits: str) -> List[str]:
        # Cumulatively build permutations.
        result = []
        for str_num in digits:
            lookup_for_letter = Solution.lookup[str_num]
            new_permutations = []
            for i in range(4):
                mapped_character = lookup_for_letter[i] if i < len(lookup_for_letter) else None
                if mapped_character:
                    if len(result) == 0:
                        new_permutations.append(mapped_character)
                    else:
                        for perm in result:
                            new_permutations.append(perm + mapped_character)
            result = new_permutations
        return result
