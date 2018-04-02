class RandomizedCollection:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.set = []
        self.length = 0

    def insert(self, val):
        """
        Inserts a value to the set. Returns true if the set did not already contain the specified element.
        :type val: int
        :rtype: bool
        """
        does_not_exist = True
        for n in self.set:
            if n == val:
                does_not_exist = False
                break
        self.set.append(val)
        self.length += 1
        return does_not_exist

    def remove(self, val):
        """
        Removes a value from the set. Returns true if the set contained the specified element.
        :type val: int
        :rtype: bool
        """
        for i in range(self.length):
            if self.set[i] == val:
                self.length -= 1
                del self.set[i]
                return True
        return False
        

    def getRandom(self):
        """
        Get a random element from the set.
        :rtype: int
        """
        return self.set[int(random.random() * self.length // 1)]
        


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
