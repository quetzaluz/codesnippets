/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var maxSize = 0
    i = 0
    if (heights.length == 0) { return 0 }
    while(i < heights.length) {
        thisSize = heights[i]
        thisHeight = heights[i]
        for (var j = i + 1; j < heights.length; j++) {
            if (thisHeight <= heights[j]) {
                thisSize += heights[i]
            } else {
                break
            }
        }
        for (var j = i - 1; j >= 0; j--) {
            if (thisHeight <= heights[j]) {
                thisSize += heights[i]
            } else {
                break
            }
        }
        if (thisSize > maxSize) {maxSize = thisSize}
        i++
    }
    return maxSize
};