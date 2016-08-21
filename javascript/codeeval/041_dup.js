 function d(str_arr) {
    var inputs = str_arr.split(';');
    var len = parseInt(inputs[0]);
    var arr = inputs[1].split(',');
    var res = {};
    for (var i = 0; i < len; i++) {
        if (res[arr[i]]) {
            console.log(arr[i]);
            break;
        } else {
            res[arr[i]] = 1;
        }
    }
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        d(line);
    }
});
