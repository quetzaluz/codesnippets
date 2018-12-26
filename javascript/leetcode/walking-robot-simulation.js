/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let c = 0;
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let dirPos = 0;
  let x = 0;
  let y = 0;
  let command, nextX, nextY;
  let maxDistance = 0;
  while (c < commands.length) {
    command = commands[c];
    if (command === -1 ) {
        dirPos = (dirPos + 1) % 4;
    } else if (command === -2) {
        dirPos = dirPos === 0 ? 3 : dirPos - 1;
    } else {
        while (command > 0) {
            nextX = x + directions[dirPos][0];
            nextY = y + directions[dirPos][1];
            nextCoord = [nextX, nextY];
            if (isObstacle(nextCoord, obstacles)) {
                console.log('boop')
                break;
            }
            x = nextX;
            y = nextY;
            command--;
        }
        maxDistance = Math.max(maxDistance, x**2 + y**2);
    }
    c++;
  }
  return maxDistance;
};

function isObstacle(nextCoord, obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
        if (obstacles[i][0] === nextCoord[0] && obstacles[i][1] === nextCoord[1]) { return true; }
    }
    return false;
}
