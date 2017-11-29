var o = {0:'', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX'}
var t = {0:'', 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC'}
var h = {0:'', 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM'}
var th = {0:'', 1: 'M', 2: 'MM', 3: 'MMM'}
var u = [[1000, th], [100, h], [10, t]]
var intToRoman = function(num) {
  var res = ''
  for (var i = 0; i < u.length; i++) {
    b = u[i][0]
    while (num >= b) {
      r = num % b
      x = Math.floor(num / b)
      num = r
      res += u[i][1][x]
    }
  }
  res += o[num]
  return res
};

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(intToRoman(parseInt(line)))
    }
});