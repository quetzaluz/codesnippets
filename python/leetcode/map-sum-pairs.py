class MapSum:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.map = {}
        

    def insert(self, key, val):
        """
        :type key: str
        :type val: int
        :rtype: void
        """
        self.map[key.lower()] = val
        

    def sum(self, prefix):
        """
        :type prefix: str
        :rtype: int
        """
        res = 0
        p = prefix.lower()
        for key in self.map.keys():
            try:
                if key.index(p) == 0:
                    res += self.map[key]
            except ValueError:
                pass # prefix not found among keys
        return res


# Your MapSum object will be instantiated and called as such:
# obj = MapSum()
# obj.insert(key,val)
# param_2 = obj.sum(prefix)
