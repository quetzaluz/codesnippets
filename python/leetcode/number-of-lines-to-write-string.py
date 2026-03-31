class Solution:
    def numberOfLines(self, widths: List[int], s: str) -> List[int]:
        line_width_limit = 100
        line_count = 1
        this_line = 0
        for char in s:
            # ord('a') => 97, with each subsequent character increasing
            char_index = ord(char) - 97
            width = widths[char_index]
            if this_line + width > line_width_limit:
                line_count += 1
                this_line = width
            else:
                this_line += width
        
        return [line_count, this_line]
