class Solution(object):
    def islandPerimiter(self, grid):
        s = 0
        p = 0
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                s = grid[r][c]
                if s == 1:
                    p += self.countPerim(r, c, grid)
        return p

    def countPerim(self, r, c, grid):
        p = 0
        if r - 1 < 0 or grid[r - 1][c] == 0:
            # north is ocean or blank
            p += 1

        if r + 1 >= grid.length or grid[r + 1][c] == 0:
            # south is ocean or blank
            p += 1

        if c - 1 < 0 or grid[r][c-1] != 1:
            # east is ocean or blank
            p += 1

        if c + 1 >= grid[0].length or grid[r][c + 1] != 1:
            # west is ocean or blank
            p += 1

        return p
