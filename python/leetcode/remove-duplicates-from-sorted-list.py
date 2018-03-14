# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
	def deleteDuplicates(self, head):
		root_node = ListNode(0)
		root_node.next = head
		prev_head = root_node
		last_val = None
		while prev_head.next is not None:
			if prev_head.next.val == last_val:
				last_val = prev_head.next.val
				prev_head.next = prev_head.next.next
			else:
				last_val = prev_head.next.val
				prev_head = prev_head.next
		return root_node.next