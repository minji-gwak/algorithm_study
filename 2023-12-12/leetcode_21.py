class Solution:
  def mergeTwoLists(self, list1, list2):
    curr = ListNode()
    head = curr

    while list1 and list2:
      if list1.val < list2.val:
        head.next = list1
        list1 = list1.next
      else:
        head.next = list2
        list2 = list2.next
      head = head.next

    head.next = list1 if list1 else list2

    return curr.next