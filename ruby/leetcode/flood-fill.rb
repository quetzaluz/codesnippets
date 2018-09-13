# @param {Integer[][]} image
# @param {Integer} sr
# @param {Integer} sc
# @param {Integer} new_color
# @return {Integer[][]}
def flood_fill(image, sr, sc, new_color)
    old_color = image[sr][sc]
    if old_color != new_color
        coords = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        image[sr][sc] = new_color
        coords.each do |coord|
            if sr + coord[0] >= 0 && sr + coord[0] < image.size() && sc + coord[1] >= 0 && sc + coord[1] < image[0].size() && image[sr + coord[0]][sc + coord[1]] == old_color
                image = flood_fill(image, sr + coord[0], sc + coord[1], new_color)
            end
        end        
    end
    image
end
