var fs  = require("fs");
var ol = function(line) {
    a = line.split(',')
    b1 = [] 
    b2 = []
    for (i = 0; i < 4; i++) {
        b1.push(parseInt(a[i]))
        b2.push(parseInt(a[i + 4]))
    }
    if ((b1[0] > b2[2] || b2[0] > b1[2]) || (b1[1] < b2[3] || b2[1] < b1[3])) {
        return 'False'
    } else {
        return 'True'
    }
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(ol(line))
    }
});