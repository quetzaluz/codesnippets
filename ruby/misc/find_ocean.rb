=begin


Given as input:
1. A map which is an array of strings of same lengths where "L" indicates land and "W" indicates water
2. a coordinate marking a point in the ocean


The Challenge:
Find and mark the ocean in the map by changing appropriate W's to O's.


An ocean coordinate is defined to be any coordinate directly adjacent to any other ocean coordinate.




 Examples:


(1)
INPUT:
 map = [ "LLLLLLLLWW",
         "LLLLLLLWWW",
         "WWWLLLLLWW" ]
 coordinate: [0,9]


OUTPUT:
 map = [ "LLLLLLLLOO",
         "LLLLLLLOOO",
         "WWWLLLLLOO" ]




(2)
INPUT:
 map = [ "WWLWLWWWLL",
         "LWLLLWLWLL",
         "LWWWWWLWWW" ]
 coordinate: [0,0]


OUTPUT:
 map = [ "OOLWLOOOLL",
         "LOLLLOLOLL",
         "LOOOOOLOOO" ]
=end


def findOcean(map, x, y)
  this_coord = map[x][y]
  adjacent_coords = [
    map[x - 1] && map[x - 1][y] ? [x-1, y] : nil,
    map[x + 1] && map[x + 1][y] ? [x+1, y] : nil,
    map[x][y + 1] ? [x, y + 1] : nil,
    map[x][y - 1] ? [x, y - 1] : nil
  ]

  if this_coord && this_coord == 'W'
    map[x][y] = 'O'
    isOcean = true
  end
  
  if isOcean
    adjacent_coords.each do |coord|
      map = findOcean(map, coord[0], coord[1]) if coord
    end
  end
  
  return map
end


map1 = ["LLLLLLLLWW",
   "LLLLLLLWWW",
   "WWWLLLLLWW"]

 map2 = [ "WWLWLWWWLL",
         "LWLLLWLWLL",
         "LWWWWWLWWW" ]

findOcean(map2, 0, 0)


puts map2.join "\n"
