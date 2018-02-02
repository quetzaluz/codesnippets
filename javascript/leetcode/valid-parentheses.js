/**
 * @param {string} s
 * @return {boolean}
 */
 // current failing case - "[([]])"
var isValid = function(s) {
    v = {p: {idx: [], cnt: 0}, s: {idx: [], cnt: 0}, c: {idx: [], cnt: 0}}
    for (var i = 0; i <= s.length; i++) {
        l = s[i]
        if (l == '(') {
            v['p'].cnt += 1
            v['p'].idx.push(i)
        } else if (l == ')') {
            if (v['p'].cnt == 0 || v['s'].idx[v['s'].idx.length - 1] > v['p'].idx[v['p'].idx.length - 1] || v['c'].idx[v['c'].idx.length - 1] > v['p'].idx[v['p'].idx.length - 1]) {
                return false
            } else {
                v['p'].cnt -= 1
                v['p'].idx.pop()
            }
        } else if (l == '[') {
            v['s'].cnt += 1
            v['s'].idx.push(i)
        } else if (l == ']') {
            if (v['s'].cnt == 0 || v['p'].idx[v['p'].idx.length - 1] > v['s'].idx[v['s'].idx.length - 1] || v['c'].idx[v['c'].idx.length - 1] > v['s'].idx[v['s'].idx.length - 1]) {
                return false
            } else {
                v['s'].cnt -= 1
                v['s'].idx.pop()
            }
        } else if (l == '{') {
            v['c'].cnt += 1
            v['c'].idx.push(i)
        } else if (l == '}') {
            if (v['c'].cnt == 0 ||  v['p'].idx[v['p'].idx.length - 1] > v['c'].idx[v['c'].idx.length - 1] || v['s'].idx[v['s'].idx.length - 1] > v['c'].idx[v['c'].idx.length - 1]) {
                return false
            } else {
                v['c'].cnt -= 1
                v['c'].idx.pop()
            }
        }
        prev = l
    }
    if (v['p'].cnt != 0 || v['s'].cnt != 0 || v['c'].cnt != 0) {
        return false
    } else {
        return true
    }
};