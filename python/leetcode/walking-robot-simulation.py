class Solution:
    def robotSim(self, commands, obstacles):
        """
        :type commands: List[int]
        :type obstacles: List[List[int]]
        :rtype: int
        """
        c = 0
        directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        dirPos = 0
        x = 0
        y = 0
        while c < len(commands):
            if commands[c] == -1:
                dirPos = (dirPos + 1) % 4
            elif commands[c] == -2:
                dirPos -= 1
                if dirPos == -1:
                    dirPos = 3
            else:
                steps = commands[c]
                while steps > 0:
                    nextX = x + directions[dirPos][0]
                    nextY = y + directions[dirPos][1]
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
            c += 1
        return (x * x) + (y * y)
