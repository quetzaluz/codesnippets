
	/**
	 * Definition for a binary tree node.
	 * function TreeNode(val) {
	 *     this.val = val;
	 *     this.left = this.right = null;
	 * }
	 */
	/**
	 * @param {TreeNode} root
	 * @return {number}
	 */
	var sumNumbers = function(root) {
	    let thisSum = [];
	    var sums = [];
	    if (root == null) { return sums }
	    sums = findLeafSum(root, thisSum, sums)
	    return sums.reduce((acc, entry) => {return concatPaths(entry) + acc}, 0);
	};

	var findLeafSum = function(root, thisSum, sums) {
		if (root.left === null || root.right === null) {
	        thisSum.push(root.val);
	        sums.push(thisSum);
	    }

	    if (root.left !== null) {
	        sums = findLeafSum(root.left, [root.val, ...thisSum], sums);
	    }

	    if (root.right !== null) {
	        sums = findLeafSum(root.right, [root.val, ...thisSum], sums);
	    }
	    return sums;
	}

	var concatPaths = function (path) {
		let multiplier = 1;
		let result = 0;
		for (let i = 0; i < path.length; i++) {
			result += path[i] * multiplier;
			multiplier *= 10;
		}
		return result;
	}