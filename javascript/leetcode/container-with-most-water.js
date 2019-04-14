/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        const containerHeight = Math.min(height[i], height[j]);
        max = Math.max(containerHeight * (j - i), max);
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max;
};
