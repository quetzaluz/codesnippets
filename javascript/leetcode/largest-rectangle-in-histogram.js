/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var sizes = []
    i = 0
    if (heights.length == 0) { return 0 }
    while(i < heights.length) {
        sizes[i] = heights[i]
        thisHeight = heights[i]
        for (var j = i + 1; j < heights.length; j++) {
            if (thisHeight <= heights[j]) {
                sizes[i] += heights[i]                
            } else {
                break
            }
        }
        for (var j = i - 1; j >= 0; j--) {
            if (thisHeight <= heights[j]) {
                sizes[i] += heights[i]                
            } else {
                break
            }
        }
        i++
    }
    return Math.max.apply(null, sizes)
};