var buildLinkedListFromArray = function (arr) {
  var head = new ListNode(arr[0]) // initialize first node
  var currentNode;
  for (var i = 1; i < arr.length; i++) {
    if (currentNode) {
      currentNode.next = new ListNode(arr[i])
      currentNode = currentNode.next
    } else {
      head.next = new ListNode(arr[i])
      currentNode = head.next
    }
  }
  return head
}
