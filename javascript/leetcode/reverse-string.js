/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    st = s.split('')
    for (var i = 0; i < Math.floor(st.length / 2); i++) {
        t = st[i]
        st[i] = st[st.length - i - 1]
        st[st.length - i - 1] = t
    }
    return st.join('')
};