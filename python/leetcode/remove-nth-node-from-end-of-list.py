# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeNthFromEnd(self, head, n):
        root = ListNode(0)
        root.next = head
        cur = root
        runner = root

        # look up use of `times` type block since i is not used
        for i in range(n):
            runner = runner.next

        while runner.next is not None:
            cur = cur.next
            runner = runner.next

        cur.next = cur.next.next

        return root.next
