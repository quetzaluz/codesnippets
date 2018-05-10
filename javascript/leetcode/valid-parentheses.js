/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    let v = {p: {idx: [], cnt: 0}, s: {idx: [], cnt: 0}, c: {idx: [], cnt: 0}}
    for (var i = 0; i <= s.length; i++) {
        let l = s[i]
        if (l == '(') {
            v = updateForOpenBrackets(v, 'p', i)
        } else if (l == ')') {
            v = updateForClosedBrackets(v, 'p', 'c', 's')
            if (!v) { return v }
        } else if (l == '[') {
            v = updateForOpenBrackets(v, 's', i)
        } else if (l == ']') {
            v = updateForClosedBrackets(v, 's', 'p', 'c')
            if (!v) { return v }
        } else if (l == '{') {
            v = updateForOpenBrackets(v, 'c', i)
        } else if (l == '}') {
            v = updateForClosedBrackets(v, 'c', 'p', 's')
            if (!v) { return v }
        }
        let prev = l
    }
    if (v['p'].cnt != 0 || v['s'].cnt != 0 || v['c'].cnt != 0) {
        return false
    } else {
        return true
    }
};

function hasUnclosedBrackets(values, thisType, otherType1, otherType2) {
    return values[thisType].cnt == 0 ||
           values[otherType1].idx[values[otherType1].idx.length - 1] > values[thisType].idx[values[thisType].idx.length - 1] ||
           values[otherType2].idx[values[otherType2].idx.length - 1] > values[thisType].idx[values[thisType].idx.length - 1]
}

function updateForClosedBrackets(values, thisType, otherType1, otherType2) {
    // returns values or false if found to be invalid
    if (hasUnclosedBrackets(values, thisType, otherType1, otherType2)) {
        return false
    } else {
        values[thisType].cnt -= 1
        values[thisType].idx.pop()
        return values
    }
}

function updateForOpenBrackets(values, thisType, idx) {
    values[thisType].cnt += 1
    values[thisType].idx.push(idx)
    return values
}