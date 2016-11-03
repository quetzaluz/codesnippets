function reverseWords(input) {
	var words = input.split(' ')
	var res = '';
	for (i = words.length - 1; i > 0; i--) {
		res += words[i] + ' '
	}
	console.log(res + words[0]);
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		reverseWords(line);
	}
});