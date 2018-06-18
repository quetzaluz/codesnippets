class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        int oldColor = image[sr][sc];
        if (oldColor == newColor) { return image; }
        image[sr][sc] = newColor;
        if (sr + 1 < image.length && image[sr + 1][sc] == oldColor) {
            image = floodFill(image, sr + 1, sc, newColor);
        }
        if (sr - 1 >= 0 && image[sr - 1][sc] == oldColor) {
            image = floodFill(image, sr - 1, sc, newColor);
        }
        if (sc + 1 < image[sr].length && image[sr][sc + 1] == oldColor) {
            image = floodFill(image, sr, sc + 1, newColor);
        }
        if (sc - 1 >= 0 && image[sr][sc - 1] == oldColor) {
            image = floodFill(image, sr, sc - 1, newColor);
        }
        return image;
    }
}
