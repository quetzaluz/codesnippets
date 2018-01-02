var fs  = require("fs");

function checkNumber (num) {
	sum = 0
	doubleIt = false
	for (var i = num.length - 1; i >=0; i--) {
		if (num[i] == ' ') { continue }
		if (doubleIt) {
			v = parseInt(num[i]) * 2
			if (v >= 10) {
				modV = v % 10
				sum += modV
				sum += ((v - modV) / 10)
			} else {
				sum += v
			}
		} else {
			sum += parseInt(num[i])
		}
		doubleIt = !doubleIt
	}
	return sum % 10 == 0 ? 1 : 0
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(checkNumber(line))
    }
});
