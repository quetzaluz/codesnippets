class Solution:
    def maxAreaOfIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        max_area = 0
        seen = []
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                string_key = str(i) + ',' + str(j)
                if grid[i][j] == 1 and string_key not in seen:
                    stack = [[i, j]]
                    seen.append(string_key)
                    this_area = 0
                    while len(stack) > 0:
                        this_coord = stack.pop()
                        this_area += 1
                        string_key_s = str(this_coord[0]) + ',' + str(this_coord[1] + 1)
                        string_key_n = str(this_coord[0]) + ',' + str(this_coord[1] - 1)
                        string_key_w = str(this_coord[0] - 1) + ',' + str(this_coord[1])
                        string_key_e = str(this_coord[0] + 1) + ',' + str(this_coord[1])
                        if this_coord[1] + 1 < len(grid[0]) and grid[this_coord[0]][this_coord[1] + 1] == 1 and string_key_s not in seen:
                            stack.append([this_coord[0], this_coord[1] + 1])
                            seen.append(string_key_s)
                        if this_coord[1] - 1 >= 0 and grid[this_coord[0]][this_coord[1] - 1] == 1 and string_key_n not in seen:
                            stack.append([this_coord[0], this_coord[1] - 1])
                            seen.append(string_key_n)
                        if this_coord[0] - 1 >= 0 and grid[this_coord[0] - 1][this_coord[1]] == 1 and string_key_w not in seen:
                            stack.append([this_coord[0] - 1, this_coord[1]])
                            seen.append(string_key_w)
                        if this_coord[0] + 1 < len(grid) and grid[this_coord[0] + 1][this_coord[1]] == 1 and string_key_e not in seen:
                            stack.append([this_coord[0] + 1, this_coord[1]])
                            seen.append(string_key_e)
                    if this_area > max_area:
                        max_area = this_area
        return max_area
