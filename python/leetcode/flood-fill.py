# UNTESTED
def flood_fill(image, sr, sc, new_color):
	old_color = image[sr][sc]
	if (old_color == new_color):
		return image
	image[sr][sc] = new_color
	if (image[sr + 1] and image[sr + 1][sc] == old_color):
		image  = flood_fill(image, sr + 1, sc, new_color)
	if (image[sr + 1] and image[sr + 1][sc] == old_color):
		image  = flood_fill(image, sr + 1, sc, new_color)
	if image[sr][sc + 1] == old_color:
		image  = flood_fill(image, sr, sc + 1, new_color)
	if image[sr][sc - 1] == old_color:
		image  = flood_fill(image, sr, sc - 1, new_color)
	return image
