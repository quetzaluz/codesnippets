def mm(inp)
  return inp.split(' | ').map{|r| r.gsub(' ', '')}
end

def generate_coords(map, x, y)
  r = []
  if my = !!(y - 1 >= 0 && map[x][y - 1])
    r << [x, y - 1]
  end
  if py = !!(map[x][y + 1])
    r << [x, y + 1]
  end
  if x - 1 >= 0 && map[x - 1]
    r << [x - 1, y]
    r << [x - 1, y - 1] if my
    r << [x - 1, y + 1] if py
  end
  if map[x + 1]
    r << [x + 1, y]
    r << [x + 1, y + 1] if py
    r << [x + 1, y - 1] if my
  end
  return r
end

def fl(map, x=0, y=0)
  this_coord = map[x][y]

  if this_coord == 'o'
    map[x][y] = 'l'
    isLake = true
  end
  
  if isLake
    adjacent_coords = generate_coords(map, x, y)
    adjacent_coords.each do |coord|
      map = fl(map, coord[0], coord[1])
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
    if m[x][y] == 'o'
      m = fl(m, x, y)
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
