class Solution:
    def robotSim(self, commands, obstacles):
        """
        :type commands: List[int]
        :type obstacles: List[List[int]]
        :rtype: int
        """
        c = 0
        directions, obstacles = [(0, 1), (1, 0), (0, -1), (-1, 0)], set(map(tuple, obstacles))
        dir_pos = 0
        x = 0
        y = 0
        max_distance = 0
        while c < len(commands):
            command = commands[c]
            if command == -1:
                dir_pos = (dir_pos + 1) % 4
            elif command == -2:
                dir_pos = (dir_pos - 1) % 4
            else:
                while command > 0:
                    nextX = x + directions[dir_pos][0]
                    nextY = y + directions[dir_pos][1]
                    nextCoord = (nextX, nextY)
                    if nextCoord in obstacles:
                        break
                    x = nextX
                    y = nextY
                    command -= 1
                max_distance = max(max_distance, x**2 + y**2)
            c += 1
        return max_distance
