/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

// This is implemented in a way that would be be backed by a database; array serves as a simple data structure for simulating that database which would store both a URL and a hash

var encodedUrls = []

var encode = function(longUrl) {
    var existingIndex = encodedUrls.indexOf(longUrl);
    if (existingIndex !== -1) {
        return `http://tinyurl.com/${existingIndex}`
    } else {
        encodedUrls.push(longUrl)
        return `http://tinyurl.com/${encodedUrls.length - 1}}`
    }
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    existingIndex = parseInt(shortUrl.split('/')[3], 10)
    return encodedUrls[existingIndex]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
 