class Solution:
    def smoothPixel(self, M, c, r):
        total_count = 0
        total_black = 0
        c_coords = [c, c - 1, c + 1]
        r_coords = [r, r - 1, r + 1]
        for c_coord in c_coords:
            for r_coord in r_coords:
                if c_coord < len(M) and c_coord >= 0 and r_coord < len(M[0]) and r_coord >= 0:
                    total_count += 1
                    total_black += M[c_coord][r_coord]
        return total_black // total_count
    
    def imageSmoother(self, M):
        """
        :type M: List[List[int]]
        :rtype: List[List[int]]
        """
        smoothed = []
        for c in range(len(M)):
            if len(smoothed) <= c:
                smoothed.append([])
            for r in range(len(M[c])):
                smoothed[c].append(self.smoothPixel(M, c, r))
        return smoothed
