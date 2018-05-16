"""
 Merge two linked lists
 head could be None as well for empty list
 Node is defined as
 
 class Node(object):
 
   def __init__(self, data=None, next_node=None):
       self.data = data
       self.next = next_node

 return back the head of the linked list in the below method.
"""

def MergeLists(headA, headB):
	if headA is None and headB is None:
		return None
	new_root = Node()
	new_head = new_root
	while headA or headB:
		if headA is None or (headB and headA.data > headB.data):
			new_head.data = headB.data
			headB = headB.next
		elif headB is None or (headB.data > headA.data):
			new_head.data = headA.data
			headA = headA.next
		if headA or headB:
			new_head.next = Node()
			new_head = new_head.next
	return new_root
