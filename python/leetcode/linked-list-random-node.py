# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:

    def __init__(self, head):
        """
        @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
        :type head: ListNode
        """
        self.head = head
    
    def getLength(self):
        curr = self.head
        c = 1
        while curr.next:
            curr = curr.next
            c += 1
        return c

    def getRandom(self):
        """
        Returns a random node's value.
        :rtype: int
        """
        r = int(random.random() * self.getLength() / 1) + 1
        c = 1
        curr = self.head
        while curr.next:
            if c == r:
                return curr.val
            curr = curr.next
            c += 1
        return c

# Your Solution object will be instantiated and called as such:
# obj = Solution(head)
# param_1 = obj.getRandom()
