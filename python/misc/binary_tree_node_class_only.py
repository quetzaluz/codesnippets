class Node:
	def __init__(self, val, left, right):
		self.val = val
		self.left = left
		self.right = right
	def find(self, val):
		if val == self.val:
			return val
		elif val < self.val and self.left is not None:
			return self.left.find(val)
		elif val > self.val and self.right is not None:
			return self.right.find(val)
		else:
			return None
	def add(self, val):
		if val < self.val:
			if self.left is not None:
				return self.left.add(val)
			else:
				self.left = Node(val, None, None)
		elif val > self.val:
			if self.right is not None:
				return self.right.add(val)
			else:
				self.right = Node(val, None, None)
		else:
			return None

x = Node(5, Node(4, Node(2, None, None), Node(1, None, None)), Node(8, Node(6, None, None), Node(7, None, None)))