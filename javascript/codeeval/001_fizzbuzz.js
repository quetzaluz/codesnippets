function fizzbuzz(input) {
	var args = input.split(' ');
	var fizz = parseInt(args[0]);
	var buzz = parseInt(args[1]);
	var len = parseInt(args[2]);
	var res = [];

	for (i = 1; i <= len; i ++) {
		var f = i % fizz == 0
		var b = i % buzz == 0
		if (f && b) {
			res.push('FB');
		} else if (f) {
			res.push('F');
		} else if (b) {
			res.push('B');
		} else {
			res.push(i);
		}
	}
	console.log(res.join(' '));
}


var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		fizzbuzz(line);
	}
});