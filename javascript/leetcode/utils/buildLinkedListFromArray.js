class ListNode {
  constructor (val) {
    this.val = val,
    this.next = null,
  }
}

var buildLinkedListFromArray = function (arr) {
  var head = new ListNode(arr[0]) // initialize first node
  var currentNode = head;
  for (var i = 1; i < arr.length; i++) {
      currentNode.next = new ListNode(arr[i])
      currentNode = currentNode.next
  }
  return head
}
