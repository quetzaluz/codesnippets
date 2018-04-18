class Codec:
    encodedUrls = []
    def encode(self, longUrl):
        """Encodes a URL to a shortened URL.

        :type longUrl: str
        :rtype: str
        """
        existingIndex = self.encodedUrls.index(longUrl) if longUrl in self.encodedUrls else None
        if existingIndex:
            return 'http://tinyurl.com/' + str(existingIndex)
        else:
            self.encodedUrls.append(longUrl)
            return 'http://tinyurl.com/' + str(len(self.encodedUrls) - 1)

    def decode(self, shortUrl):
        """Decodes a shortened URL to its original URL.

        :type shortUrl: str
        :rtype: str
        """
        existingIndex = int(shortUrl.split('/')[-1])
        return self.encodedUrls[existingIndex]

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))
