class Solution:
    def floodFill(self, image, sr, sc, newColor):
        oldColor = image[sr][sc]
        if (oldColor == newColor):
            return image
        image[sr][sc] = newColor
        if (sr + 1 < len(image) and image[sr + 1][sc] == oldColor):
            image  = self.floodFill(image, sr + 1, sc, newColor)
        if (sr - 1 >= 0 and image[sr - 1][sc] == oldColor):
            image  = self.floodFill(image, sr - 1, sc, newColor)
        if sc + 1 < len(image[sr]) and image[sr][sc + 1] == oldColor:
            image  = self.floodFill(image, sr, sc + 1, newColor)
        if sc - 1 >= 0 and image[sr][sc - 1] == oldColor:
            image  = self.floodFill(image, sr, sc - 1, newColor)
        return image
