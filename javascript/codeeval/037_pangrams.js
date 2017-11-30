const emptyAlpha = {
  'a': 1,
  'b': 1,
  'c': 1,
  'd': 1,
  'e': 1,
  'f': 1,
  'g': 1,
  'h': 1,
  'i': 1,
  'j': 1,
  'k': 1,
  'l': 1,
  'm': 1,
  'n': 1,
  'o': 1,
  'p': 1,
  'q': 1,
  'r': 1,
  's': 1,
  't': 1,
  'u': 1,
  'v': 1,
  'w': 1,
  'x': 1,
  'y': 1,
  'z': 1,
}

function clone(obj) {
    if(obj == null || typeof(obj) != 'object')
        return obj;    
    var temp = new obj.constructor(); 
    for(var key in obj)
        temp[key] = clone(obj[key]);    
    return temp;
}

var missingChars = function (line, alpha) {
  var found = 0;
  for (var i = 0; i < line.length; i++) {
    if (alpha[line[i]]) {
      found += 1
      alpha[line[i]] = 0
    }
    if (found == 26) {
      return 'NULL'
    }
  }
  var missing = ''
  for (key in alpha) {
    if (alpha[key]) {missing += key}
  }
  return missing
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(missingChars(line, clone(emptyAlpha)))
  }
});