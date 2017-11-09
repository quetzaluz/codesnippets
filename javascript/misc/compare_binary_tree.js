Please use this Google doc to code during your interview. To free your hands for coding, we recommend that you use a headset or a phone with speaker option.

// hello!
Uriel Perez



class BinaryTreeNode {
  String value;
  BinaryTreeNode left;
  BinaryTreeNode right;
}

A (B C) === A (B C)  // identical

A (B C) == A (C B)   // similar but not identical


F (B C) == A (C B)

// output? true if identical or similar
// works for A (B C) === A (B C) but not other cases
bool isSimilar(BT left, BT right) {
  if (BTL == null && BTR == null) { return true }
  else if (BTL == null || BTR == null) { return false }

  if (BTL.v == BTR.v) {
  	return isSimilar(BTL.l, BTR.l) && isSimilar(BTL.r, BTR.r)
  }
  return false
}

// other cases -- address them here
// depth of tree?
// Improve with memoization -- store information about value of left and right
bool isSimilar(BT left, BT right) {
  if (BTL == null && BTR == null) { return true }
  else if (BTL == null || BTR == null) { return false }

  if (BTL.v == BTR.v) {
  	var leftIsSimilar = isSimilar(BTL.l, BTR.l)  // L: B, R: C
      var rightIsSimilar = leftIsSimilar && isSimilar(BTL.r, BTR.r)
	if (leftIsSimilar && rightSimilar) return true
      var symSimilar1 = isSimilar(BTL.l, BTR.r)  // L: B, R: B
      var symSimilar2 = symSimilar1 && isSimilar(BTL.r, BTR.l)  // L: C, R: C
	if (symSimilar1 && symSimilar2) return true
  }
  return false
}


// build basic tree/node classes

function Node (val) {
  this.l = null;
  this.r = null;
  this.v = val
}

function Tree() {
	
	this._traverse = function (node) {
		if (node !== null) {
			// + shorthand for concatenating results
	this._traverse(node.l) + node.v + this._traverse(node.r)
}
}
}
