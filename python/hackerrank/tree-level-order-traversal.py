class Node:
    def __init__(self, info): 
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

class BinarySearchTree:
    def __init__(self): 
        self.root = None

    def create(self, val):  
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root
         
            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break
import sys
"""
Node is defined as
self.left (the left child of the node)
self.right (the right child of the node)
self.info (the value of the node)
"""
def levelOrder(root):
    #Write your code here
        result = []
        depth = 0
        levels = findLevels(root, result, depth)
        for i in range(len(levels)):
            l = levels[i]
            for j in range(len(l)):
                v = l[j]
                sys.stdout.write(str(v))
                if j < len(l) - 1:
                    sys.stdout.write(' ')
            if i < len(levels) - 1:
                sys.stdout.write(' ')
                    
def findLevels(root, result, depth):
    if root is None:
        return result
    if len(result) <= depth:
        result.append([])
    result[depth].append(root.info)
    if root.left is not None:
        result = findLevels(root.left, result, depth + 1)
    if root.right is not None:
        result = findLevels(root.right, result, depth + 1)
    return result


tree = BinarySearchTree()
t = int(input())

arr = list(map(int, input().split()))

for i in range(t):
    tree.create(arr[i])

levelOrder(tree.root)
