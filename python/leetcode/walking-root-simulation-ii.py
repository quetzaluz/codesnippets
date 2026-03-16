from typing import List

# Direction order: East -> North -> West -> South (right-hand turn at walls)
_DIRECTION_NAMES = ('East', 'North', 'West', 'South')
_OFFSETS = ((1, 0), (0, 1), (-1, 0), (0, -1))


class Robot:

    def __init__(self, width: int, height: int):
        self.width = width
        self.height = height
        self.position = [0, 0]
        self._dir_index = 0  # 0=East, 1=North, 2=West, 3=South

    def step(self, num: int) -> None:
        # Full state (position + direction) repeats every 2 laps: (0,0) East -> South -> East
        perimeter = 2 * (self.width + self.height - 2)
        if perimeter > 0:
            num %= 2 * perimeter
        moves_done = 0
        while moves_done < num:
            dx, dy = _OFFSETS[self._dir_index]
            nx, ny = self.position[0] + dx, self.position[1] + dy
            if 0 <= nx < self.width and 0 <= ny < self.height:
                self.position = [nx, ny]
                moves_done += 1
            else:
                self._dir_index = (self._dir_index + 1) % 4

    def getPos(self) -> List[int]:
        return self.position

    def getDir(self) -> str:
        return _DIRECTION_NAMES[self._dir_index]


# Your Robot object will be instantiated and called as such:
# obj = Robot(width, height)
# obj.step(num)
# param_2 = obj.getPos()
# param_3 = obj.getDir()