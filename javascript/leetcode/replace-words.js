/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    shortened = sentence.split(' ')
    for (var i = 0; i < shortened.length; i++) {
        for (var j = 0; j < dict.length; j++) {
            if (shortened[i].indexOf(dict[j]) == 0) {
                shortened[i] = dict[j]
            }
        }
    }
    return shortened.join(' ')
};
