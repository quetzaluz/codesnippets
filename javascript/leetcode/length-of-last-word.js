/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    st = s.trim()
    return (st.length - (st.lastIndexOf(' ') + 1))
};
