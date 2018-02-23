/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    st = s.trim()
    return (st.substr(st.lastIndexOf(' ') + 1).length)
};
