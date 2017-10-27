var fs  = require("fs");

function trunc(inp) {
    if (inp.length > 55) {
        var newStr = inp.substr(0,40)
        var lastSpaceIndex = newStr.lastIndexOf(' ')
        if (lastSpaceIndex) {
            newStr = newStr.substr(0, lastSpaceIndex)
        }
        return newStr + '... <Read More>'
    } else {
        return inp
    }
}
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(trunc(line))
    }
});
