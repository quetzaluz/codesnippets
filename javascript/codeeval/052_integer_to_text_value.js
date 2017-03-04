D = {
        1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten', 11: 'Eleven',
        12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Nineteen'
    }
T = { 2: 'Twenty', 3: 'Thirty', 4: 'Forty', 5: 'Fifty', 6: 'Sixty', 7: 'Seventy', 8: 'Eighty', 9: 'Ninety'}
function itd(line) {
    res = ''
    i = parseInt(line)
    var ones, tens, hundreds, thousands, tenThousands, hundredThousands, millions, tenMillions, hundredMillions, billions;
    if (i == 0) {
        return 'ZeroDollars'
    } else if (i == 1) {
        return 'OneDollar'
    } else if (i < 20) {
        return D[i] + 'Dollars'
    } else {
        while (i > 0) {
            ones = i % 10;
            i -= ones;
            tens = (i % 100) / 10;
            i -= tens * 10;
            hundreds = (i % 1000) / 100;
            i -= hundreds * 100;
            thousands = (i % 10000) / 1000;
            i -= thousands * 1000;
            tenThousands = (i % 100000) / 10000;
            i -= tenThousands * 10000;
            hundredThousands = (i % 1000000 ) / 100000;
            i -= hundredThousands * 100000;
            millions = (i % 10000000) / 1000000;
            i -= millions * 1000000;
            tenMillions = (i % 100000000) / 10000000;
            i -= tenMillions * 10000000;
            hundredMillions = (i % 100000000) / 100000000;
            i -= hundredMillions * 100000000
        }
        if (hundredMillions > 0) {
            // might actually want a subroutine we can call again like this for reference
            //hMO = hundredMillions % 10;
            //hundredMillions -= hMO;
            //hMT = hundredMillions % 100;
            //hundredMillions =
            res += D[hundredMillions] + 'Hundred'
        }
        if (tenMillions > 1) {
            res += T[tenMillions]
            res += D[millions] + 'Million'
        } else if (tenMillions == 1) {
            res += D[10 + millions] + 'Million'
        } else if (millions > 0) {
            res += D[millions] + 'Million'
        }
        if (hundredThousands > 0) {
            res += D[hundredThousands] + 'Hundred'
        }
        if (tenThousands > 1) {
            res += T[tenThousands]
            res += D[thousands] + 'Thousand'
        } else if (tenThousands == 1) {
            res += D[10 + thousands] + 'Thousand'
        } else if (thousands > 0) {
            res += D[thousands] + 'Thousand'
        }
        if (hundreds > 0) {
            res += D[hundreds] + 'Hundred'
        }
        if (tens > 1) {
            res += T[tens]
            res += D[ones]
        } else if (tens == 1) {
            res += D[10 + ones]
        } else if (ones > 0) {
            res += D[ones]
        }
    }

    
    return res + 'Dollars'
}