var minSubArrayLen = function(s, nums) {
    var thisLen = 0;
    var thisSum = 0;
    var maxLen = nums.length + 1;
    var minLen = maxLen;
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        thisSum = nums[i];
        thisLen = 1;
        j = i + 1;
        while (j < nums.length) {
            if (thisSum >= s) {
                break;
            }
            thisSum += nums[j];
            thisLen++;
            j++;
        }
        if (thisSum >= s && thisLen < minLen) {
            minLen = thisLen;
        }
    }
    if (minLen < maxLen) {
        return minLen;
    } else {
        return 0;
    }
}
