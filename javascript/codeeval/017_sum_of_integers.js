var fs  = require("fs");
function cs (lis) {
    arr = lis.split(',')
    leftSum = 0
    largestSum = -Infinity
    for (var i = 0; i < arr.length; i++) {
        leftSum += parseInt(arr[i])
        if (leftSum > largestSum) { largestSum = leftSum }
        if (leftSum < 0) { leftSum = 0 }
    }
    return largestSum
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(cs(line))
    }
});