"""
 Delete duplicate nodes
 head could be None as well for empty list
 Node is defined as
 
 class Node(object):
 
   def __init__(self, data=None, next_node=None):
       self.data = data
       self.next = next_node

 return back the head of the linked list in the below method.
"""

def RemoveDuplicates(head):
		root_node = Node(0)
		root_node.next = head
		prev_head = root_node
		last_val = None
		while prev_head.next is not None:
			if prev_head.next.data == last_val:
				last_val = prev_head.next.data
				prev_head.next = prev_head.next.next
			else:
				last_val = prev_head.next.data
				prev_head = prev_head.next
		return root_node.next