var fs  = require("fs");
const TR = 'True'
const FA = 'False'

var ol = function(line) {
    a = line.split(',')
    b1 = [] 
    for (i = 0; i < 8; i++) {
        b1.push(parseInt(a[i]))
    }
    if ((b1[0] > b1[6] || b1[4] > b1[2]) || (b1[1] < b1[7] || b1[5] < b1[3])) {
        return FA
    } else {
        return TR
    }
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(ol(line))
    }
});