class Solution:
    def robotSim(self, commands, obstacles):
        """
        :type commands: List[int]
        :type obstacles: List[List[int]]
        :rtype: int
        """
        c = 0
        directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        dir_pos = 0
        x = 0
        y = 0
        max_distance = 0
        while c < len(commands):
            if commands[c] == -1:
                dir_pos = (dir_pos + 1) % 4
            elif commands[c] == -2:
                dir_pos -= 1
                if dir_pos == -1:
                    dir_pos = 3
            else:
                steps = commands[c]
                while steps > 0:
                    nextX = x + directions[dir_pos][0]
                    nextY = y + directions[dir_pos][1]
                    nextCoord = [nextX, nextY]
                    try:
                        obstacles.index(nextCoord)
                        # Obstacle at next coord if error not thrown
                        steps = 0
                    except:
                        # No error / obstacle, set x and y and mark step done
                        x = nextX
                        y = nextY
                        steps -= 1
            if (x * x) + (y * y) > max_distance:
                max_distance = (x * x) + (y * y)
            c += 1
        return max_distance
