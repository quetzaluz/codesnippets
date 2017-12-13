/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var maxSize = 0
    i = 0
    if (heights.length == 0) { return 0 }
    while(i < heights.length) {
        thisHeight = heights[i]
        while (thisHeight >= 1) {
            thisSize = thisHeight
            for (var j = i + 1; j < heights.length; j++) {
                if (thisHeight <= heights[j]) {
                    thisSize += thisHeight               
                } else {
                    break
                }
            }
            nextHeight = heights[i + 1]
            if (thisSize > maxSize) {maxSize = thisSize}
            if (nextHeight < thisHeight) {
                thisHeight = nextHeight
            } else if (!nextHeight) {
                thisHeight = 0
            } else {
                thisHeight--
            }
        }
        i++
    }
    return maxSize
};