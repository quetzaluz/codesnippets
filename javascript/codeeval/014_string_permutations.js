function getP(str){
  var p = [],
      n = [],
      c = str.split('');

  function perm(ch) {
    if(ch.length === 0) { p.push(n.join('')) }
    for (var j=0; j < ch.length; j++) {
      ch.push(ch.shift());
      n.push(ch[0]);
      perm(ch.slice(1));
      n.pop();
    }  
  }
  
  perm(c);
  console.log(p.sort().join(','));
};

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        getP(line);
    }
});