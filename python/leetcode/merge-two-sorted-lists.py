# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, headA, headB):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        if headA is None and headB is None:
            return None
        new_root = ListNode(None)
        new_head = new_root
        while headA or headB:
            if headA is None or (headB and headA.val >= headB.val):
                new_head.val = headB.val
                headB = headB.next
            elif headB is None or (headB.val > headA.val):
                new_head.val = headA.val
                headA = headA.next
            if headA or headB:
                new_head.next = ListNode(None)
                new_head = new_head.next
        return new_root
