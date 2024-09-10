/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertGreatestCommonDivisors = (head) => {
  const commonDivision = (a, b) => {
    if (b === 0) {
      return a;
    }
    return commonDivision(b, a % b);
  };

  let currNode = head;
  let nextNode = head.next;

  while (currNode && nextNode) {
    let insertNode = new ListNode(commonDivision(currNode.val, nextNode.val));
    currNode.next = insertNode;
    insertNode.next = nextNode;
    currNode = nextNode;
    nextNode = nextNode.next;
  }
  return head;
};
