function Node (val) {
	this.l = null
	this.r = null
	this.v = val
}

function Tree () {
	this.root = null

	this.getRoot = function () {
		return this.root
	}

	this.add = function (val) {
		if (this.root == null) {
			this.root = new Node(val)
		} else {
			this._add(val, this.root)
		}
	}

	this._add = function (val, node) {
		if (val < node.v) {
			if (node.l != null) {
				this._add(val, node.l)
			} else {
				node.l = new Node(val)
			}
		} else {
			if (node.r != null) {
				this._add(val, node.r)
			} else {
				node.r = new Node(val)
			}
		}
	}

	this.find = function (val) {
		if (this.root != null) {
			return this._find(val, this.root)
		} else {
			return null
		}
	}

	this._find = function (val, node) {
		if (val == node.v) {
			return node
		} else if (val < node.l && node.l != null) {
			this._find(val, node.l)
		} else if (val > node.r && node.r != null) {
			this._find(val, node.r)
		}
	}

	this.deleteTree = function () {
		this.root = null
	}

	this.printTree =function () {
		if (this.root != null) {
			this._printTree(this.root)
		}
	}

	this._printTree = function (node) {
		if (node != null) {
			this._printTree(node.l)
			console.log(node.v + ' ')
			this._printTree(node.r)
		}
	}
}
//     3
// 0     4
//   2      8
var tree = new Tree()
tree.add(3)
tree.add(4)
tree.add(0)
tree.add(8)
tree.add(2)
tree.printTree()
console.log((tree.find(3)).v)
console.log(tree.find(10))
tree.deleteTree()
tree.printTree()
