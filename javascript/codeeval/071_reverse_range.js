var fs  = require("fs");

function reverseRange(nums, k) {
    i = 0
    while (i < nums.length && i + k - 1 < nums.length) {
        c = 0
        for (var j = i + k - 1; j > i; j--) {
            tmp = nums[i + c]
            nums[i + c] = nums[j]
            nums[j] = tmp
            c++
        }
        i += k
    }
    return nums.join(',')
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        inps = line.split(';')
        console.log(reverseRange(inps[0].split(','), parseInt(inps[1])))
    }
});