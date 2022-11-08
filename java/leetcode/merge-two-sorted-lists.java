/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode headA, ListNode headB) {
        if (headA == null && headB == null) {
            return null;
        }
        ListNode newRoot = new ListNode(0);
        ListNode newHead = newRoot;
        while (headA != null || headB != null) {
            if (headA == null || (headB != null && headA.val > headB.val)) {
                newHead.val = headB.val;
                headB = headB.next;
            } else if (headB == null || (headB.val >= headA.val)) {
                newHead.val = headA.val;
                headA = headA.next;
            }
            if (headA != null || headB != null) {
                newHead.next = new ListNode(0);
                newHead = newHead.next;
            }
        }
        return newRoot;
    }
}


/**
 * Recently solved this again as warm up, here is a newer iteration.
 *
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Sample array version
        // int i = 0;
        // int j = 0;
        // while (i < list1.length) {
        //     while(j < list2.length) {
        //         if (list1[i] <= list[j]) {
        //             System.out.println("append i %d to new list", list1[i]);
        //             i++;
        //         } else {
        //             System.out.println("append j %d to new list", list2[j]);
        //             j++;
        //         }
        //     }
        // }
        ListNode head = new ListNode();
        ListNode newList = head;
        while (list1 != null) {
            while(list2 != null) {
                if (list1.val < list2.val) {
                    newList.next = new ListNode(list1.val);
                    newList = newList.next;
                    list1 = list1.next;
                } else if (list1.val == list2.val) {
                    newList.next = new ListNode(list1.val);
                    newList = newList.next;
                    newList.next = new ListNode(list2.val);
                    newList = newList.next;
                    list1 = list1.next;
                    list2 = list2.next;
                } else {
                    newList.next = new ListNode(list2.val);
                    newList = newList.next;
                    list2 = list2.next;
                }
                
            }
        }
        return head.next;
    }
    private ListNode appendNode(ListNode list, int val) {
list.val = val;
                    list.next = new ListNode();
        list = list.next;
    return list;}
}
