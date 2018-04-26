# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        pAtraversals = 0
        pBtraversals = 0
        rootA = ListNode(0)
        rootA.next = headA
        rootB = ListNode(0)
        rootB.next = headB
        pA = headA
        pB = headB
        while pAtraversals < 2 and pBtraversals < 2:
            if (pA and pB and pA.val == pB.val):
                return pA
            if pA is None or pA.next is None:
                pA = rootB.next
                pAtraversals += 1
            else:
                pA = pA.next
            if pB is None or pB.next is None:
                pB = rootA.next
                pBtraversals += 1
            else:
                pB = pB.next
        return
