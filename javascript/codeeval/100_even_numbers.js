function isEven (str_int) {
    var int = parseInt(str_int);
    if (int % 2 == 0) {
       console.log(1);
    } else {
        console.log(0);
    }
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
       isEven(line);
    }
});
