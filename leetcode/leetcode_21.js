class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let mergeTwoLists = function (list1, list2) {
  let list = new ListNode();
  let head = list;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      head.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    head = head.next;
  }
  head.next = list1 || list2;
  return list.next;
};

console.log(mergeTwoLists(new ListNode([1, 2, 4]), new ListNode([1, 3, 4])));
