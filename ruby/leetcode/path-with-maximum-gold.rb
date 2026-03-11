# @param {Integer[][]} grid
# @return {Integer}
def get_maximum_gold(grid)
  n = grid.length
  m = grid[0].length
  @max_gold = 0
  # Sum of gold still in grid; decremented when we visit, restored on backtrack
  @remaining_sum = grid.sum { |row| row.sum }

  (0...n).each do |i|
    (0...m).each do |j|
      dfs(grid, i, j, n, m, 0) if grid[i][j] != 0
    end
  end
  @max_gold
end

ROW_OFFSET = [1, -1, 0, 0].freeze
COL_OFFSET = [0, 0, -1, 1].freeze

# path_sum_so_far = gold collected before stepping onto (x, y)
def dfs(grid, x, y, n, m, path_sum_so_far)
  return if x < 0 || y < 0 || x >= n || y >= m || grid[x][y] == 0

  curr = grid[x][y]
  path_sum = path_sum_so_far + curr
  @max_gold = [@max_gold, path_sum].max

  # Upper bound: even visiting every remaining cell can't beat best so far
  # (@remaining_sum includes curr; after zeroing, at most @remaining_sum - curr more)
  return if path_sum + (@remaining_sum - curr) <= @max_gold

  grid[x][y] = 0
  @remaining_sum -= curr

  4.times do |i|
    dfs(grid, x + ROW_OFFSET[i], y + COL_OFFSET[i], n, m, path_sum)
  end

  @remaining_sum += curr
  grid[x][y] = curr
end
