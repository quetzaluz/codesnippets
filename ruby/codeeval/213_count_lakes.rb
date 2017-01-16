def mm(inp)
  return inp.split(' | ').map{|r| r.gsub(' ', '')}
end

def fl(map, x=0, y=0)
  this_coord = map[x][y]
  adjacent_coords = [
    x - 1 >= 0 && map[x - 1] && map[x - 1][y] ? [x - 1, y] : nil,
    map[x + 1] && map[x + 1][y] ? [x + 1, y] : nil,
    map[x][y + 1] ? [x, y + 1] : nil,
    y - 1 >= 0 && map[x][y - 1] ? [x, y - 1] : nil,
    x - 1 >= 0 && y - 1 >= 0 && map[x - 1] && map[x - 1][y - 1] ? [x - 1, y - 1] : nil,
    map[x + 1] && map[x + 1][y + 1] ? [x + 1, y + 1] : nil,
    x - 1 >= 0 && map[x - 1] && map[x - 1][y + 1] ? [x - 1, y + 1] : nil,
    y - 1 >= 0 && map[x + 1] && map[x + 1][y - 1] ? [x + 1, y - 1] : nil
  ]

  if this_coord == 'o'
    map[x][y] = 'l'
    isLake = true
  end
  
  if isLake
    adjacent_coords.each do |coord|
      map = fl(map, coord[0], coord[1]) if coord
    end
  end
  
  return map
end

def cl(inp)
  m = mm(inp)
  lc = 0
  x = 0
  y = 0
  while y < m[0].length do
    om = m.join('')
    m = fl(m, x, y)
    if m.join('') != om
      lc += 1
    end
    if (x + 1) < m.length
      x += 1
    else
      x = 0
      y += 1
    end
  end

  return lc
end

File.open(ARGV[0]).each_line do |line|
  puts(cl(line))
end
