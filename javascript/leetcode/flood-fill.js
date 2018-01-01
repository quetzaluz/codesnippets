/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    oldColor = image[sr][sc]
    if (oldColor == newColor) { return image }
    image[sr][sc] = newColor
    if (image[sr + 1] && image[sr + 1][sc] == oldColor) {
        image = floodFill(image, sr + 1, sc, newColor)
    }
    if (image[sr - 1] && image[sr - 1][sc] == oldColor) {
        image = floodFill(image, sr - 1, sc, newColor)
    }
    if (image[sr][sc + 1] == oldColor) {
        image = floodFill(image, sr, sc + 1, newColor)
    }
    if (image[sr][sc - 1] == oldColor) {
        image = floodFill(image, sr, sc - 1, newColor)
    }
    return image
};