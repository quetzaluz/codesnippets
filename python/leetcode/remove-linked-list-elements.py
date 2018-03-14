# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
	def removeElements(self, head, val):
		root_node = ListNode(0)
		root_node.next = head
		prev_head = root_node
		while prev_head.next is not None:
			if prev_head.next.val == val:
				prev_head.next = prev_head.next.next
			else:
				prev_head = prev_head.next
		return root_node.next