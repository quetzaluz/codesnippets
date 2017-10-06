function doors(inp) {
  inp = inp.split(' ')
  var d = parseInt(inp[0])
  var ite = parseInt(inp[1])
  var r = []
  for (var i = 0; i < ite.length; i++) {
    for (var t = 0; t < 2; t++) {
      var mod = t + 2;
      for (var j = 0; j < d.length; j++) {
        if (t == 0 && i == 0) {
          r.push(j % 2)
        } else {
          // check door and open/close depending on modulo match
        }
      }
    }
  }
}