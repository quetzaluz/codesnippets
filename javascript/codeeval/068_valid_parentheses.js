var fs  = require("fs");

function vp (line) {
	v = {p: 0, b: 0, c: 0}
	prev = ''
	for (var i = 0; i <= line.length; i++) {
		l = line[i]
        if (l == '(') {
            v['p'] += 1
		} else if (l == ')') {
            if (prev == '' || prev == '[' || prev == '{') {
                return false
            } else {
                v['p'] -= 1
			}
        } else if (l == '[') {
            v['b'] += 1
        } else if (l == ']') {
            if (prev == '' || prev == '(' || prev == '{') {
                return false
            } else {
                v['b'] -= 1
            }
        } else if (l == '{') {
            v['c'] += 1
        } else if (l == '}') {
            if (prev == '' || prev == '[' || prev == '(') {
                return false
            } else {
                v['c'] -= 1
            }
        }
        prev = l
    }
    if (v['p'] != 0 || v['b'] != 0 || v['c'] != 0) {
        return false
    } else {
        return true
	}
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(vp(line));
    }
});