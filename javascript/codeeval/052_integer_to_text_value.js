var fs  = require("fs");
D = {
        1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten', 11: 'Eleven',
        12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Nineteen'
    }
T = { 2: 'Twenty', 3: 'Thirty', 4: 'Forty', 5: 'Fifty', 6: 'Sixty', 7: 'Seventy', 8: 'Eighty', 9: 'Ninety'}
function grp(x, m, d) {
    hundred = ten = one = 0;
    t = ''
    z = 0
    while (x > 0) {
        one = x % (m / 100)
        x -= one
        ten = x % (m / 10)
        x -= ten 
        ten /= 10
        hundred = x % m
        x -= hundred
        hundred /= 100
    }
    if (hundred > 0) {
        t += D[hundred] + 'Hundred'
    }
    if (ten > 1) {
        t += T[ten]
        t += ( one > 0 ? D[one] : '') + d
    } else if (ten == 1) {
        t += D[10 + one] + d
    } else if (one > 0) {
        t += D[one] + d
    } else if (t != '') {
        return t + d
    } else {
        return t
    }
    return t
}

function itd(line) {
    res = ''
    i = parseInt(line)
    if (i == 0) {
        return 'ZeroDollars'
    } else if (i < 20) {
        return D[i] + 'Dollars'
    } else {
        f = 1000
        d = ['', 'Thousand', 'Million']
        di = 0
        while (i > 0) {
            a = i % f
            r = grp(a, f, d[di])
            res = r + res
            di += 1
            i = (i - a) / f
        }
    }
    return res + 'Dollars'
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(itd(line))
    }
});