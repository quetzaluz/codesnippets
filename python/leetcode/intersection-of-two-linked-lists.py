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
        pATraversals = 0
        pBTraversals = 0
        rootA = ListNode(0)
        rootA.next = headA
        rootB = ListNode(0)
        rootB.next = headB
        pA = headA
        pB = headB
        while pATraversals < 2 and pBTraversals < 2:
            if (pA and pB and pA.val == pB.val):
                return pA
            if pA is None or pA.next is None:
                pA = rootB.next
                pATraversals += 1
            else:
                pA = pA.next
            if pB is None or pB.next is None:
                pB = rootA.next
                pBTraversals += 1
            else:
                pB = pB.next
        return
