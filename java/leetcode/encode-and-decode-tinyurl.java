public class Codec {
	private List<String> encodedUrls = new ArrayList<String>();

    // Encodes a URL to a shortened URL.
    public String encode(String longUrl) {
	    if (encodedUrls.contains(longUrl)) {
	        return String.format("http://tinyurl.com/%d", encodedUrls.indexOf(longUrl));
	    } else {
	        encodedUrls.add(longUrl);
	        return String.format("http://tinyurl.com/%d", encodedUrls.size() - 1);
	    }
    }

    // Decodes a shortened URL to its original URL.
    public String decode(String shortUrl) {
	    int existingIndex = Integer.parseInt(shortUrl.split("/")[3], 10);
	    return encodedUrls.get(existingIndex);
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(url));
