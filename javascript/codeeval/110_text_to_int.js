var fs  = require("fs");
UNI = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90 }
BAS = { 'hundred': 100, 'thousand': 1000, 'million': 1000000 }


function tti(line) {
    r = ''
    m = 1
    t = 0
    inp = line.split(' ')
    for (i = inp.length - 1; i >= 0; i--) {
        w = inp[i]
        if (BAS[w]) {
            if (BAS[w] == 100) {
                m *= BAS[w]
            } else {
                m = BAS[w]
            }
        } else if (UNI[w]) {
            t += UNI[w] * m
        } else if (w == 'negative') {
            r = '-'            
        }
    }
    return r + t
}
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(tti(line))
    }
});